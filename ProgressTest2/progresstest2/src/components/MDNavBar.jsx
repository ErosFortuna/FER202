//make a navbar that •	Left side: Application name PersonalBudget with logo.	Right side: Text “Signed in as <FullName>” and a Logout button (redirects to /login and clears token/state).
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";

const MDNavBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                 <img
                        alt=""
                        src={"/images/da39f755a0a32efd77b2.jpg"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />

                    
                     PersonalBudget
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Add navigation links here */}
                    </Nav>
                    <Nav>
                        <Nav.Link disabled>
                            Signed in as {user?.fullName}
                        </Nav.Link>
                        <Button variant="outline-danger" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MDNavBar;
