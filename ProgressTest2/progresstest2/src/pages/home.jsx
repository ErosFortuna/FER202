import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import MDNavBar from "../components/MDNavBar";
import TotalExpenseCard from "../components/TotalExpenseCard";
import ExpenseManagement from "../components/ExpenseManagement";
import ExpenseManager from "../components/ExpenseManager";
import FilterBar from "../components/FilterBar";

const Home = () => {
    return (
        <>
            <MDNavBar />

            <Container className="mt-4">

                <Row>

                    {/* LEFT COLUMN */}
                    <Col md={4}>
                        <TotalExpenseCard />

                        <ExpenseManager/>
                    </Col>

                    {/* RIGHT COLUMN */}
                    <Col md={8}>
                        <FilterBar />

                        <ExpenseManagement />
                    </Col>

                </Row>

            </Container>

            <footer className="text-center mt-4 text-muted">
                © 2025 PersonalBudget Demo
            </footer>
        </>
    );
};

export default Home;