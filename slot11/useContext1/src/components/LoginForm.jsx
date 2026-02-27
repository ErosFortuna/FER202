import React, { useReducer, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Alert
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialFormState = {
    email: "",
    password: ""
};

function formReducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value
            };
        case "RESET":
            return initialFormState;
        default:
            return state;
    }
}

function LoginForm() {
    const { user, error, login } = useContext(AuthContext);
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        dispatch({
            type: "SET_FIELD",
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formState.email, formState.password);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <h3 className="text-center mb-4">Đăng nhập Admin</h3>

                            {error && (
                                <Alert variant="danger" className="text-center">
                                    {error}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Đăng nhập
                                    </Button>
                                </div>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;