import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import MessageModal from "../components/MessageModal";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


const Login = () => {
    const { login, user, logout } = useAuth();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    const [form, setForm] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!form.username.trim()) {
            newErrors.username = "Username is required";
        } else if (form.username.trim().length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        }

        if (!form.password.trim()) {
            newErrors.password = "Password is required";
        } else if (form.password.trim().length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        const loggedUser = await login(form.username, form.password);

        if (!loggedUser) {
            alert("Invalid username or password");
            return;
        }

        setLoggedUser(loggedUser);
        setShowModal(true);
    };

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Row>
                <Col>
                    <Card style={{ width: "400px" }} className="shadow p-4">
                        <Card.Body>
                            <h3 className="text-center mb-4">Login</h3>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        value={form.username}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                username: e.target.value,
                                            })
                                        }
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={form.password}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                password: e.target.value,
                                            })
                                        }
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100"
                                >
                                    Login
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

          <MessageModal showModal={showModal} setShowModal={setShowModal} loggedUser={loggedUser} />
        </Container>
    );
};

export default Login;