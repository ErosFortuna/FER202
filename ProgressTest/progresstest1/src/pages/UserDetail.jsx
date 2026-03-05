import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useEffect, useState } from "react";
import instance from "../api/userAPI"; // axios instance của bạn
import { Card, Button } from "react-bootstrap";

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { users } = useUser();

    const [user, setUser] = useState(null);

    useEffect(() => {
        // 1️⃣ Tìm trong context trước
        const foundUser = users.find(u => u.id === Number(id));

        if (foundUser) {
            setUser(foundUser);
        } else {
            // 2️⃣ Nếu không có thì fetch riêng
            instance.get(`/accounts/${id}`)
                .then(res => setUser(res.data))
                .catch(() => setUser(null));
        }
    }, [id, users]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: "400px" }}>
                <Card.Body className="text-center">
                    <img
                        src={user.avatar}
                        alt="avatar"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "15px"
                        }}
                    />

                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Role:</strong> {user.role} <br />
                        <strong>Status:</strong> {user.status}
                    </Card.Text>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/user-manager")}
                    >
                        Back to Lists
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserDetail;