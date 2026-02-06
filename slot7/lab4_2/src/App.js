import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import các components đã làm từ bài trước

//import CapNhatSoLuong from './components/CapNhatSoLuong';
import XuLyForm from './components/XuLyForm'; // Exercise 3
import ToDoList from './components/ToDoList'; // Exercise 4
import XuLyDonHang from './components/XuLyDonHang'; // Exercise 2
import CapNhatSoLuong2 from './components/CapNhatSoLuong2';
import DangKyForm from './components/DangKyForm'; // Exercise 5

// Trang giới thiệu (Home) chứa thông tin tác giả 
const Home = () => (
  <Container className="mt-4">
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>1. Thông tin tác giả </Card.Title>
        <Card.Text>
          * <strong>Mã SV:</strong> PS12345 <br/>
          * <strong>Họ tên:</strong> traltb <br/>
          * <strong>GitHub:</strong> <a href="https://github.com/yourlink">Link Github</a>
        </Card.Text>
        <hr />
        <Card.Title>2. Cấu trúc project </Card.Title>
        <p>Project được tổ chức theo cấu trúc Component-based với React-Bootstrap.</p>
      </Card.Body>
    </Card>
  </Container>
);

function App() {
  return (
    <Router>
      {/* NavBar chuyên nghiệp sử dụng React-Bootstrap  */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Lab 3: useState Hook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/ex1">Ex1: Counter</Nav.Link>
              <Nav.Link as={NavLink} to="/ex2">Ex2: Xử lý đơn hàng</Nav.Link>
              <Nav.Link as={NavLink} to="/ex3">Ex3: Xử lý Form</Nav.Link>
              <Nav.Link as={NavLink} to="/ex4">Ex4: Todo List</Nav.Link>
              <Nav.Link as={NavLink} to="/ex5">Ex5: Đăng Ký Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cấu hình các đường dẫn (Routes)  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<CapNhatSoLuong2 />} />
        <Route path="/ex2" element={<XuLyDonHang />} />
        <Route path="/ex3" element={<XuLyForm />} />
        <Route path="/ex4" element={<ToDoList />} />
        <Route path="/ex5" element={<DangKyForm />} />
      </Routes>
    </Router>
  );
}

export default App;