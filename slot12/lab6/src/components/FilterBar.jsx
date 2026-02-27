import React, { useState } from "react";
import { useMovieDispatch } from "../contexts/MovieContext";
import { Form, Row, Col, Button } from "react-bootstrap";

const FilterBar = () => {
    const { filterMovies } = useMovieDispatch();

    const [filters, setFilters] = useState({
        search: "",
        genre: "",
        duration: "",
        sort: ""
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <Form className="mb-4">
            <Row>
                <Col>
                    <Form.Control
                        name="search"
                        placeholder="Tìm kiếm..."
                        onChange={handleChange}
                    />
                </Col>

                <Col>
                    <Form.Select name="genre" onChange={handleChange}>
                        <option value="">Tất cả thể loại</option>
                        <option value="1">Sci-Fi</option>
                        <option value="2">Comedy</option>
                        <option value="3">Drama</option>
                        <option value="4">Horror</option>
                        <option value="5">Romance</option>
                        <option value="6">Action</option>
                        <option value="7">Thriller</option>
                    </Form.Select>
                </Col>

                <Col>
                    <Form.Control
                        name="duration"
                        type="number"
                        placeholder="Thời lượng <= phút"
                        onChange={handleChange}
                    />
                </Col>

                <Col>
                    <Form.Select name="sort" onChange={handleChange}>
                        <option value="">Sắp xếp</option>
                        <option value="asc">Tên A-Z</option>
                        <option value="desc">Tên Z-A</option>
                    </Form.Select>
                </Col>

                <Col>
                    <Button onClick={() => filterMovies(filters)}>
                        Lọc
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FilterBar;