import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizza House</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
            />
            <Button variant="outline-light" bg="orange" style={{backgroundColor: "orange"}}>
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
