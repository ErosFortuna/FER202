import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', { username, password });
        // Add your login logic here
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col md={5}>
                    <Card className="login-card shadow-lg">
                        <Card.Body className="p-5">
                            <h2 className="text-center mb-4 login-title">Welcome</h2>
                            <p className="text-center text-muted mb-4">Sign in to your account</p>

                            <Form onSubmit={handleLogin}>
                                {/* Username Field */}
                                <Form.Group className="mb-4">
                                    <Form.Label className="login-label">Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="login-input-icon">
                                            <i className="bi bi-person-fill"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your username"
                                            className="login-input"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>

                                {/* Password Field */}
                                <Form.Group className="mb-4">
                                    <Form.Label className="login-label">Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="login-input-icon">
                                            <i className="bi bi-lock-fill"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            className="login-input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>

                                {/* Buttons */}
                                <div className="d-flex gap-3 mt-5">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="login-btn flex-grow-1"
                                    >
                                        <i className="bi bi-box-arrow-in-right me-2"></i>Login
                                    </Button>
                                    <Button
                                        variant="outline-secondary"
                                        type="button"
                                        className="cancel-btn flex-grow-1"
                                        onClick={handleCancel}
                                    >
                                        <i className="bi bi-x-circle me-2"></i>Cancel
                                    </Button>
                                </div>
                            </Form>

                            {/* Footer Link */}
                            <p className="text-center mt-4">
                                <a href="#" className="login-link">Forgot your password?</a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
