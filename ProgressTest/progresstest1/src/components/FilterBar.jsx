import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FilterBar = ({ filters, setFilters }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Form className="mb-3">
            <Row>

                {/* Search */}
                <Col md={3}>
                    <Form.Control
                        type="text"
                        placeholder="Search by username or email..."
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                    />
                </Col>

                {/* Status Filter */}
                <Col md={2}>
                    <Form.Select
                        name="status"
                        value={filters.status}
                        onChange={handleChange}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="locked">Locked</option>
                    </Form.Select>
                </Col>

                {/* Role Filter */}
                <Col md={2}>
                    <Form.Select
                        name="role"
                        value={filters.role}
                        onChange={handleChange}
                    >
                        <option value="all">All Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </Form.Select>
                </Col>

                {/* Sort */}
                <Col md={3}>
                    <Form.Select
                        name="sort"
                        value={filters.sort}
                        onChange={handleChange}
                    >
                        <option value="">No Sorting</option>
                        <option value="username_asc">Username A → Z</option>
                        <option value="username_desc">Username Z → A</option>
                        <option value="role">Role (Admin → User)</option>
                        <option value="status">Status (Active → Locked)</option>
                    </Form.Select>
                </Col>

            </Row>
        </Form>
    );
};

export default FilterBar;