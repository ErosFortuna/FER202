//make the navbar.jsx file to connect 3 componetns: LoginForm, ManageUser, DemoForm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">My Web App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/manage-user">Manage User</Nav.Link>
                        <Nav.Link as={Link} to="/login-form">Login Form</Nav.Link>
                        <Nav.Link as={Link} to="/demo-form">Demo Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppNavbar;