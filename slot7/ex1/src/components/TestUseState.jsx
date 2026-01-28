// form (username, age). Button Change. Thay đổi label: My name is username, age.
//change the text label on the form label not the button label

import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';

function TestUseState() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

        const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Hello, ${username}, ${age} years old`);
    };

    return (
        <Container className="my-5">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type='submit' >change</Button>
            </Form>

            {message && <div className="mt-3 text-success fw-bold">{message}</div>}
        </Container>
    );
}
export default TestUseState;