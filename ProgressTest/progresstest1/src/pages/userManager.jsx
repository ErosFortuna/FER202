import React, { useState, useMemo } from "react";
import { Table, Button, Spinner, Alert, Badge, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";

import instance from "../api/userAPI";
import FilterBar from "../components/FilterBar";
import ConfirmModal from "../components/ConfirmModal";
import ToastMessage from "../components/ToastMessage";

const UserManager = () => {
    const { users, loading, error, dispatch } = useUser();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        search: "",
        status: "all",
        role: "all",
        sort: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [toastMsg, setToastMsg] = useState("");
    const [showToast, setShowToast] = useState(false);

    // ================= FILTER & SORT =================
    const filteredUsers = useMemo(() => {
        let result = [...users];

        if (filters.search) {
            const keyword = filters.search.toLowerCase();
            result = result.filter(user =>
                user.username.toLowerCase().includes(keyword) ||
                user.email.toLowerCase().includes(keyword)
            );
        }

        if (filters.status !== "all") {
            result = result.filter(user => user.status === filters.status);
        }

        if (filters.role !== "all") {
            result = result.filter(user => user.role === filters.role);
        }

        switch (filters.sort) {
            case "username_asc":
                result.sort((a, b) => a.username.localeCompare(b.username));
                break;

            case "username_desc":
                result.sort((a, b) => b.username.localeCompare(a.username));
                break;

            case "role":
                result.sort((a, b) => a.role.localeCompare(b.role));
                break;

            case "status":
                result.sort((a, b) => a.status.localeCompare(b.status));
                break;

            default:
                break;
        }

        return result;
    }, [users, filters]);

    // ================= LOCK / UNLOCK CLICK =================
    const { user: currentUser } = useAuth();

    const handleLockClick = (account) => {
        if (!currentUser) {
            setToastMsg("No logged in user found.");
            setShowToast(true);
            return;
        }

        if (account.id === currentUser.id) {
            setToastMsg("You cannot lock yourself!");
            setShowToast(true);
            return;
        }

        setSelectedUser(account);
        setShowModal(true);
    };

    // ================= CONFIRM ACTION =================
    const { lockUser, unlockUser } = useUser();

    const handleConfirm = async () => {
        try {
            if (selectedUser.status === "locked") {
                await unlockUser(selectedUser.id);
                setToastMsg("Unlocked successfully");
            } else {
                await lockUser(selectedUser.id);
                setToastMsg("Locked successfully");
            }

            setShowToast(true);
            setShowModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    if (loading) {
        return (
            <div className="text-center mt-4">
                <Spinner animation="border" />
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <Container>

            <FilterBar filters={filters} setFilters={setFilters} />

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                <img
                                    src={user.avatar}
                                    alt={user.username}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }}
                                />
                            </td>

                            <td>{user.username}</td>
                            <td>{user.email}</td>

                            <td>
                                <Badge bg={user.role === "admin" ? "primary" : "secondary"}>
                                    {user.role}
                                </Badge>
                            </td>

                            <td>
                                <Badge bg={user.status === "locked" ? "danger" : "success"}>
                                    {user.status === "locked" ? "Locked" : "Active"}
                                </Badge>
                            </td>

                            <td>
                                <Button
                                    variant="info"
                                    size="sm"
                                    onClick={() => navigate(`/accounts/${user.id}`)}
                                    className="me-2"
                                >
                                    View Details
                                </Button>

                                <Button
                                    variant={user.status === "locked" ? "success" : "danger"}
                                    size="sm"
                                    onClick={() => handleLockClick(user)}
                                >
                                    {user.status === "locked" ? "Unlock" : "Lock"}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* ===== Confirm Modal ===== */}
            <ConfirmModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onConfirm={handleConfirm}
                title={
                    selectedUser?.status === "locked"
                        ? `Unlock account ${selectedUser?.username}?`
                        : `Lock account ${selectedUser?.username}? The user cannot log in after this`
                }
            />

            {/* ===== Toast ===== */}
            <ToastMessage
                show={showToast}
                message={toastMsg}
                onClose={() => setShowToast(false)}
            />

        </Container>
    );
};

export default UserManager;