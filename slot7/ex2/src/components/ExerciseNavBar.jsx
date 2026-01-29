import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ExerciseNavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>React Exercises</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/QuantitySelector">
                            Exercise 1
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ProcessOrderModal">
                            Exercise 2
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ProductForm">
                            Exercise 3
                        </Nav.Link>
                        <Nav.Link as={Link} to="/TodoList">
                            Exercise 4
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ExerciseNavBar;
