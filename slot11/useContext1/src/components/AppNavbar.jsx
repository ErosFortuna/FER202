import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AppNavbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>React Demo</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/counter">
            Counter
          </Nav.Link>

          <Nav.Link as={Link} to="/light">
            Light Switch
          </Nav.Link>
        </Nav>

        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;