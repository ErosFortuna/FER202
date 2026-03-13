import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import ModalConfirm from './ModalConfirm';
import { loginThunk } from '../redux/slices/authSlice';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure }
    from '../redux/slices/authSlice';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    // Lấy navigate từ react-router-dom để chuyển hướng sau khi đăng nhập thành công
    const navigate = useNavigate();

    // Lấy state và dispatch từ AuthContext
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    //Tạo 1 state cho lỗi
    const [errors, setError] = useState({ message: '' });

    const handleLogin = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!password) newErrors.password = "Password is required";
        if (password && password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        const resultAction = await dispatch(
            loginThunk({ username, password })
        );

        if (loginThunk.fulfilled.match(resultAction)) {
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                navigate("/");
            }, 2000);

        } else {
            setError({ message: resultAction.payload });
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    // Hàm tiện ích để xử lý thay đổi input và xóa lỗi tương ứng khi người dùng nhập lại
    const handleInputChange = (setter, field) => (e) => {
        setter(e.target.value);
        setError((prevErrors) => ({ ...prevErrors, [field]: '' }));
    };
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-white py-3">
                            <h3 className="text-center mb-0">Login</h3>
                        </Card.Header>
                        <Card.Body className="p-4">

                            {/* Hiển thị thông báo lỗi nếu có từ global state */}
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="identifier" className="mb-3" noValidate>
                                    <Form.Label>Username or email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username or email"
                                        value={username}
                                        onChange={handleInputChange(setUsername, 'username')}

                                        disabled={loading}
                                        isInvalid={!!errors.username} // Chỉ kiểm tra lỗi cục bộ
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username} {/* Chỉ hiển thị lỗi cục bộ */}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={handleInputChange(setPassword, 'password')}
                                        placeholder="Enter password"

                                        disabled={loading}
                                        isInvalid={!!errors.password} // Chỉ kiểm tra lỗi cục bộ
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password} {/* Chỉ hiển thị lỗi cục bộ */}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex gap-2 mt-4">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="flex-fill"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login'}
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        className="flex-fill"
                                        onClick={handleCancel}
                                        disabled={loading}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalConfirm
                show={showModal}
                title="Login Successful"
                message="You have successfully logged in. Redirecting to dashboard..."
                onConfirm={() => setShowModal(false)} // Đóng modal khi người dùng nhấn Confirm
                onCancel={() => setShowModal(false)} // Đóng modal khi người dùng nhấn Cancel hoặc đóng modal
            />
        </Container>
    );
}

export default LoginForm;
