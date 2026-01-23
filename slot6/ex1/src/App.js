import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemoForm from './components/DemoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from './components/LoginForm';
import ManageUser from './components/ManageUser';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/demo-form" element={<DemoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
