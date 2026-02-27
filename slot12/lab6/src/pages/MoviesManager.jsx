import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { MovieProvider } from "../contexts/MovieContext";
import MovieForm from "../components/MovieForm";
import MovieTable from "../components/MovieTable";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";

const MovieManagerContent = () => {
  return (
    <>
      <Header />

      <Container fluid className="py-5" style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
        <Container>
          {/* Title Section */}
          <Row className="mb-4">
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Body className="text-center">
                  <h1 className="fw-bold text-primary">
                    🎬 Movie Management System
                  </h1>
                  <p className="text-muted mb-0">
                    Context API + useReducer + Axios + React Bootstrap
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Form Section */}
          <Row className="mb-4">
            <Col>
              <Card className="shadow border-0">
                <Card.Header className="bg-primary text-white fw-bold">
                  ➕ Add / Update Movie
                </Card.Header>
                <Card.Body>
                  <MovieForm />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* List Section */}
          <Row>
            <Col>
              <Card className="shadow border-0">
                <Card.Header className="bg-dark text-white fw-bold">
                  🎥 Movie List
                </Card.Header>
                <Card.Body>
                  <FilterBar />
                  <div className="mt-3">
                    <MovieTable />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

const MovieManager = () => (
  <MovieProvider>
    <MovieManagerContent />
  </MovieProvider>
);

export default MovieManager;