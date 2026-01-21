import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function BookingForm() {
    return (
        <Container fluid className="p-0 bg-dark text-white">
            <Form className="p-4 shadow bg-dark text-white">
            <h3 className="mb-4 text-center">Book Your Table</h3>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formService">
                        <Form.Label>Select a Service</Form.Label>
                        <Form.Control as="select">
                            <option>Service 1</option>
                            <option>Service 2</option>
                            <option>Service 3</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Additional requests or information" />
            </Form.Group>
            <Button variant="warning" type="submit">
                Send Message
            </Button>
        </Form>
        </Container>
    );
}
export default BookingForm; 