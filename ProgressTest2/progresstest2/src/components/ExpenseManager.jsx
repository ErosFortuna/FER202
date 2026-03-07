import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useExpense } from "../contexts/ExpenseContext";
import api from "../api/userAPI";

const AddExpenseCard = () => {

    const { editingExpense, setEditingExpense, fetchExpenses } = useExpense();

    const [form, setForm] = useState({
        name: "",
        amount: "",
        category: "",
        date: ""
    });

    useEffect(() => {
        if (editingExpense) {
            setForm(editingExpense);
        }
    }, [editingExpense]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {

        if (editingExpense) {
            await api.put(`/expenses/${editingExpense.id}`, form);
        } else {
            await api.post("/expenses", form);
        }

        fetchExpenses();
        setEditingExpense(null);

        setForm({
            name: "",
            amount: "",
            category: "",
            date: ""
        });
    };

    const handleReset = () => {
        setEditingExpense(null);
        setForm({
            name: "",
            amount: "",
            category: "",
            date: ""
        });
    };

    return (
        <Card className="mt-3">
            <Card.Body>

                <Card.Title>
                    {editingExpense ? "Edit Expense" : "Add Expense"}
                </Card.Title>

                <Form>

                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            name="amount"
                            type="number"
                            value={form.amount}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="d-flex gap-2">

                        <Button variant="secondary" onClick={handleReset}>
                            Reset
                        </Button>

                        <Button variant="primary" onClick={handleSubmit}>
                            {editingExpense ? "Update" : "Add"}
                        </Button>

                    </div>

                </Form>

            </Card.Body>
        </Card>
    );
};

export default AddExpenseCard;