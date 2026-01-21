import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <Container className="my-5">
            <h1 className="mb-4">Contact Us</h1>
            
            <Row>
                <Col md={6} className="mb-4">
                    <h3>Get in Touch</h3>
                    <p>We'd love to hear from you! Whether you have questions, feedback, or special requests, 
                       feel free to reach out to us.</p>
                    
                    <h5 className="mt-4">Contact Information</h5>
                    <p>
                        <strong>Address:</strong> 123 Pizza Street, Food City<br />
                        <strong>Phone:</strong> +1 (555) 123-4567<br />
                        <strong>Email:</strong> info@pizzahouse.com<br />
                        <strong>Hours:</strong> Monday - Sunday, 10:00 AM - 10:00 PM
                    </p>
                </Col>

                <Col md={6}>
                    <h3>Send us a Message</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                placeholder="Enter your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
