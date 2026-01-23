import React, { useState } from 'react';
import {
    Container,
    Table,
    Button,
    Badge,
    Row,
    Col,
    Card,
    Modal,
    Form,
    InputGroup
} from 'react-bootstrap';
import ListOfUsers from '../data/ListOfUsers';
import './ManageUser.css';

function ManageUser() {
    const [users, setUsers] = useState(ListOfUsers);

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleLock = (id) => {
        setUsers(users.map(user =>
            user.id === id
                ? { ...user, status: user.status === 'locked' ? 'active' : 'locked' }
                : user
        ));
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'active':
                return <Badge bg="success"><i className="bi bi-check-circle me-1"></i>Active</Badge>;
            case 'locked':
                return <Badge bg="danger"><i className="bi bi-lock me-1"></i>Locked</Badge>;
            case 'inactive':
                return <Badge bg="warning" text="dark"><i className="bi bi-clock me-1"></i>Inactive</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    return (
        <Container fluid className="manage-user-container py-5">
            <div className="manage-header mb-5">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h1 className="manage-title">
                            <i className="bi bi-people-fill me-3"></i>Quản Lý Người Dùng
                        </h1>
                        <p className="manage-subtitle">Quản lý và kiểm soát các tài khoản người dùng</p>
                    </Col>
                    <Col md={4} className="text-end">
                        <Button variant="primary" className="add-user-btn">
                            <i className="bi bi-plus-circle me-2"></i>Thêm Người Dùng
                        </Button>
                    </Col>
                </Row>
            </div>

            <Card className="manage-card shadow-lg">
                <div className="table-responsive">
                    <Table className="manage-table" hover>
                        <thead>
                            <tr className="table-header">
                                <th className="text-center">ID</th>
                                <th>Avatar</th>
                                <th>Tên Người Dùng</th>
                                <th>Trạng Thái</th>
                                <th>Mật Khẩu</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="table-row">
                                    <td className="text-center fw-bold">{user.id}</td>
                                    <td>
                                        <img
                                            src={user.avatar}
                                            alt={user.username}
                                            className="avatar-img"
                                        />
                                    </td>
                                    <td className="username-cell">
                                        <span className="username-text">{user.username}</span>
                                    </td>
                                    <td>{getStatusBadge(user.status)}</td>
                                    <td>
                                        <span className="password-mask">{user.password}</span>
                                    </td>
                                    <td className="action-cell">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            className="action-btn edit-btn"
                                            onClick={() => handleEdit(user)}
                                            title="Chỉnh sửa"
                                        >
                                            <i className="bi bi-pencil-square"></i>Edit
                                        </Button>
                                        <Button
                                            variant={user.status === 'locked' ? 'outline-success' : 'outline-danger'}
                                            size="sm"
                                            className="action-btn lock-btn ms-2"
                                            onClick={() => handleLock(user.id)}
                                            title={user.status === 'locked' ? 'Mở khóa' : 'Khóa'}
                                        >
                                            <i className={`bi bi-${user.status === 'locked' ? 'unlock' : 'lock'}`}></i>
                                            {user.status === 'locked' ? 'Unlock' : 'Lock'}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleCloseModal} centered className="edit-modal">
                <Modal.Header closeButton className="modal-header-custom">
                    <Modal.Title>
                        <i className="bi bi-pencil-square me-2"></i>Chỉnh Sửa Người Dùng
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>ID</Form.Label>
                                <Form.Control value={selectedUser.id} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên Người Dùng</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><i className="bi bi-person-fill"></i></InputGroup.Text>
                                    <Form.Control value={selectedUser.username} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Trạng Thái</Form.Label>
                                <Form.Select value={selectedUser.status}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="locked">Locked</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mật Khẩu</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><i className="bi bi-lock-fill"></i></InputGroup.Text>
                                    <Form.Control type="password" value="12345678" />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        <i className="bi bi-check-circle me-1"></i>Lưu Thay Đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ManageUser;
