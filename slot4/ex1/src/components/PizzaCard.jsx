
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Badge, Modal } from 'react-bootstrap';


function PizzaCard({ pizza }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: '18rem' }} className="m-3 shadow d-flex flex-column">
                <Badge bg="success" className="position-absolute m-2">{pizza.tag}</Badge>
                <Card.Img variant="top" src={pizza.image} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text className='text-decoration-line-through' >${pizza.price.toFixed(2)}</Card.Text>
                    <Card.Text className="text-danger">${pizza.newPrice.toFixed(2)}</Card.Text>
                    <Card.Text>{pizza.description}</Card.Text>
                    <div className="d-flex gap-2 mt-auto">
                        <Button variant="primary" className="flex-grow-1" onClick={handleShowModal}>view details</Button>
                        <Button variant="primary" className="flex-grow-1">buy</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} alt={pizza.name} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1rem' }} />
                    <p><strong>Description:</strong> {pizza.description}</p>
                    <p><strong>Original Price:</strong> <span className='text-decoration-line-through'>${pizza.price.toFixed(2)}</span></p>
                    <p><strong>Sale Price:</strong> <span className="text-danger">${pizza.newPrice.toFixed(2)}</span></p>
                    <p><strong>Tag:</strong> <Badge bg="success">{pizza.tag}</Badge></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary">Buy Now</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PizzaCard;