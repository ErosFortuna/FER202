import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <Container className="py-5">
                {/* Hero Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="hero-content">
                            <h1 className="hero-title">Welcome to My Web App</h1>
                            <p className="hero-subtitle">
                                Discover an innovative platform designed to help you manage users,
                                handle authentication, and showcase dynamic forms with ease.
                            </p>
                            <p className="hero-description">
                                Our application combines modern web technologies with intuitive design
                                to provide you with a seamless experience. Whether you're managing user
                                accounts, logging in securely, or filling out forms, we've got you covered.
                            </p>
                            <div className="hero-buttons">
                                <Button className="btn-custom me-3">Get Started</Button>
                                <Button variant="outline-light">Learn More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img
                            src="/logo512.png"
                            alt="App Logo"
                            className="hero-image"
                        />
                    </Col>
                </Row>

                {/* Features Section */}
                <div className="features-section mb-5">
                    <h2 className="section-title text-center mb-4">Key Features</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="feature-card">
                                <Card.Body className="text-center">
                                    <div className="feature-icon">👥</div>
                                    <Card.Title>User Management</Card.Title>
                                    <Card.Text>
                                        Easily manage user accounts, track their status,
                                        and maintain complete control over user activities.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="feature-card">
                                <Card.Body className="text-center">
                                    <div className="feature-icon">🔐</div>
                                    <Card.Title>Secure Login</Card.Title>
                                    <Card.Text>
                                        Robust authentication system to ensure your data
                                        is protected with industry-standard security practices.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="feature-card">
                                <Card.Body className="text-center">
                                    <div className="feature-icon">📋</div>
                                    <Card.Title>Dynamic Forms</Card.Title>
                                    <Card.Text>
                                        Create and manage flexible forms that adapt to your needs
                                        with real-time validation and user-friendly interfaces.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* About Section */}
                <Row className="about-section align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <img
                            src="/logo192.png"
                            alt="About"
                            className="about-image"
                        />
                    </Col>
                    <Col md={6}>
                        <div className="about-content">
                            <h2>About Us</h2>
                            <p>
                                Our mission is to provide a modern, efficient, and user-friendly
                                web application that simplifies complex business processes.
                            </p>
                            <p>
                                With cutting-edge technology and a focus on user experience,
                                we deliver solutions that make a difference.
                            </p>
                            <ul className="about-list">
                                <li>✓ Modern React Architecture</li>
                                <li>✓ Bootstrap Responsive Design</li>
                                <li>✓ Secure Authentication</li>
                                <li>✓ Data Management</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* Cat Video Section */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <h2 className="section-title mb-3">Cat Moment 🐱 🐱 🐱</h2>

                        <div className="ratio ratio-16x9 cat-video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/J---aiyznGQ"
                                title="Cat Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
