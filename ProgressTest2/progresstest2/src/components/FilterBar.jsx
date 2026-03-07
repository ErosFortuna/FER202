import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useExpense } from "../contexts/ExpenseContext";

const FilterBar = () => {

    const { expenses, categoryFilter, setCategoryFilter } = useExpense();

    const categories = [...new Set(expenses.map((e) => e.category))];

    return (
        <Form className="mb-3">
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>

                        <Form.Select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="">All Categories</option>

                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Form.Select>

                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default FilterBar;