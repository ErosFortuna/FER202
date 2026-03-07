//make a table that shows list of expenses with columns: Date, Category, Amount, Description. The table should take data from expense context and display the expenses for the month. The table should have pagination if there are more than 10 expenses.
import React, { useEffect, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useExpense } from "../contexts/ExpenseContext";
import { Button } from "react-bootstrap";

const ExpenseManagement = () => {
    const { filteredExpenses, fetchExpenses, deleteExpense, setEditingExpense } = useExpense();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchExpenses();
    }, []);


    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this expense?")) {
            deleteExpense(id);
        }
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentExpenses = filteredExpenses.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

    return (
        <div>
            <h2>Expense Management</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentExpenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{new Intl.NumberFormat("vi-VN").format(Number(expense.amount))} đ</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                            <td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => setEditingExpense(expense)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteExpense(expense.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {totalPages > 1 && (
                <Pagination>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item
                            key={i + 1}
                            active={i + 1 === currentPage}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            )}
        </div>
    );
}

export default ExpenseManagement;