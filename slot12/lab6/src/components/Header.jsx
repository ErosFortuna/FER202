import { Navbar, Nav, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Navbar bg="dark" variant="dark" className="px-3">
            <Navbar.Brand>Movie Manager</Navbar.Brand>

            <Nav className="ms-auto">
                {user && (
                    <>
                        <Navbar.Text className="me-3">
                            Xin chào, <strong>{user.username}</strong>
                        </Navbar.Text>
                        <Button variant="outline-light" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                )}
            </Nav>
        </Navbar>
    );
};

export default Header;