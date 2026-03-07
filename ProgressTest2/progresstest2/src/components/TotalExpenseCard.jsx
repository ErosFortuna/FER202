//make a bootstrap card that shows total expenses for the month, with a title "Total Expenses" and a large number showing the amount. The card should have a light background and some padding.
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
//make this total expense card take data from expense context and calculate the total expenses for the month
import { useExpense } from "../contexts/ExpenseContext";

const TotalExpenseCard = () => {
    const { expenses, fetchExpenses } = useExpense();

    useEffect(() => {
        fetchExpenses();
    }, []);

    console.log(expenses);
    const totalExpenses = expenses.reduce(
        (sum, e) => sum + Number(e.amount),
        0
    );
    return (
            <Card className="mb-4" bg="light" text="dark">
                <Card.Body>
                    <Card.Title>Total Expenses</Card.Title>
                    <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        {new Intl.NumberFormat("vi-VN").format(totalExpenses)} đ
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default TotalExpenseCard;