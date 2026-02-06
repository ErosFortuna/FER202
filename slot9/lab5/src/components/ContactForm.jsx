import React, { useReducer } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// INITIAL STATE
const initialState = {
    values: {
        firstName: "",
        lastName: "",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
    },
    errors: {},
    validated: false,
};

// VALIDATE 1 FIELD
const validateField = (field, value) => {
    switch (field) {
        case "firstName":
            if (!value.trim()) return "First name is required.";
            break;

        case "lastName":
            if (!value.trim()) return "Last name is required.";
            break;

        case "username":
            if (!value.trim()) return "Username is required.";
            if (value.length < 3) return "Username must be at least 3 characters.";
            break;

        case "city":
            if (!value.trim()) return "City is required.";
            break;

        case "state":
            if (!value.trim()) return "State is required.";
            break;

        case "zip":
            if (!value.trim()) return "Zip code is required.";
            if (!/^\d+$/.test(value)) return "Zip code must contain only numbers.";
            if (value.length < 4) return "Zip code must be at least 4 digits.";
            break;

        case "terms":
            if (!value) return "You must agree before summiting.";
            break;

        default:
            return "";
    }

    return "";
};

// VALIDATE ALL FORM
const validateForm = (values) => {
    let newErrors = {};

    Object.keys(values).forEach((field) => {
        const error = validateField(field, values[field]);
        if (error) {
            newErrors[field] = error;
        }
    });

    return newErrors;
};

// REDUCER
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]: action.value,
                },
            };

        case "SET_ERROR":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.error,
                },
            };

        case "CLEAR_ERROR":
            const updatedErrors = { ...state.errors };
            delete updatedErrors[action.field];

            return {
                ...state,
                errors: updatedErrors,
            };

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.errors,
            };

        case "SET_VALIDATED":
            return {
                ...state,
                validated: action.value,
            };

        case "RESET_FORM":
            return initialState;

        default:
            return state;
    }
};

function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // HANDLE CHANGE
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        dispatch({
            type: "SET_VALUE",
            field: name,
            value: type === "checkbox" ? checked : value,
        });
    };

    // HANDLE BLUR (VALIDATE SINGLE FIELD)
    const handleBlur = (field) => {
        const error = validateField(field, state.values[field]);

        if (error) {
            dispatch({ type: "SET_ERROR", field, error });
        } else {
            dispatch({ type: "CLEAR_ERROR", field });
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: "SET_VALIDATED", value: true });

        const validationErrors = validateForm(state.values);
        dispatch({ type: "SET_ERRORS", errors: validationErrors });

        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            dispatch({ type: "RESET_FORM" });
        }
    };

    return (
        <Container className="mt-4">
            <h3 className="mb-4 text-center">Contact Form</h3>

            <Form noValidate onSubmit={handleSubmit}>
                {/* FIRST LINE */}
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                value={state.values.firstName}
                                onChange={handleChange}
                                onBlur={() => handleBlur("firstName")}
                                isInvalid={state.validated && !!state.errors.firstName}
                                isValid={
                                    state.validated &&
                                    !state.errors.firstName &&
                                    state.values.firstName.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                value={state.values.lastName}
                                onChange={handleChange}
                                onBlur={() => handleBlur("lastName")}
                                isInvalid={state.validated && !!state.errors.lastName}
                                isValid={
                                    state.validated &&
                                    !state.errors.lastName &&
                                    state.values.lastName.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={state.values.username}
                                onChange={handleChange}
                                onBlur={() => handleBlur("username")}
                                isInvalid={state.validated && !!state.errors.username}
                                isValid={
                                    state.validated &&
                                    !state.errors.username &&
                                    state.values.username.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* SECOND LINE */}
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                name="city"
                                value={state.values.city}
                                onChange={handleChange}
                                onBlur={() => handleBlur("city")}
                                isInvalid={state.validated && !!state.errors.city}
                                isValid={
                                    state.validated &&
                                    !state.errors.city &&
                                    state.values.city.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter state"
                                name="state"
                                value={state.values.state}
                                onChange={handleChange}
                                onBlur={() => handleBlur("state")}
                                isInvalid={state.validated && !!state.errors.state}
                                isValid={
                                    state.validated &&
                                    !state.errors.state &&
                                    state.values.state.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter zip code"
                                name="zip"
                                value={state.values.zip}
                                onChange={handleChange}
                                onBlur={() => handleBlur("zip")}
                                isInvalid={state.validated && !!state.errors.zip}
                                isValid={
                                    state.validated &&
                                    !state.errors.zip &&
                                    state.values.zip.trim() !== ""
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {state.errors.zip}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* TERMS */}
                <Form.Group controlId="formTerms" className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Agree to terms and conditions"
                        name="terms"
                        checked={state.values.terms}
                        onChange={handleChange}
                        onBlur={() => handleBlur("terms")}
                        isInvalid={state.validated && !!state.errors.terms}
                        isValid={state.validated && !state.errors.terms && state.values.terms}
                        feedback={state.errors.terms}
                        feedbackType="invalid"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ContactForm;
