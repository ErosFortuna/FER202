import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Modal, Badge } from "react-bootstrap";

function NewCard({ news }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: "18rem" }} className="m-3 shadow d-flex flex-column">

                <Badge bg="success" className="position-absolute m-2">
                    News #{news.id}
                </Badge>

                <Card.Img
                    variant="top"
                    src={news.images}
                    style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{news.title}</Card.Title>

                    <Card.Text>{news.description}</Card.Text>

                    <div className="d-flex gap-2 mt-auto">
                        <Button
                            variant="primary"
                            className="flex-grow-1"
                            onClick={handleShowModal}
                        >
                            View Details
                        </Button>

                        <Button variant="success" className="flex-grow-1">
                            Read More
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* MODAL */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{news.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        src={news.images}
                        alt={news.title}
                        style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            marginBottom: "1rem",
                        }}
                    />

                    <p>
                        <strong>Description:</strong> {news.description}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewCard;
