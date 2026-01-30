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
                        <Nav.Link as={Link} to="/QuantitySelector2">
                            Exercise 1
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ProcessOrderModal2">
                            Exercise 2
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ProductForm2">
                            Exercise 3
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ToDoList2">
                            Exercise 4
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ExerciseNavBar;
