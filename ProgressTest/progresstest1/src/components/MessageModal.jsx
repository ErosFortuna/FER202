
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MessageModal = ({ showModal, setShowModal, loggedUser }) => {
    const navigate = useNavigate();

    return (

        <Modal show={showModal} centered>
            <Modal.Header>
                <Modal.Title>Login Successful</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Welcome, <strong>{loggedUser?.username}</strong>! Login successful.
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={() => {
                        setShowModal(false);
                        navigate("/user-manager");
                    }}
                >
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessageModal;