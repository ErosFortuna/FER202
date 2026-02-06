import logo from './logo.svg';
import './App.css';
import NavBar from './components/FoodNavBar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodNavBar from './components/FoodNavBar';
import Footer from './components/Home';
import Home from './components/Home';
import MyCarousel from './components/FoodCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bannerImages } from './data/bannerImages';
import NewsList from './components/NewList';
import ContactForm from './components/ContactForm';
import Quiz from './components/Quiz';
function App() {
  return (
    <>

      <Router>
        <FoodNavBar></FoodNavBar>
        <MyCarousel bannerImages={bannerImages}></MyCarousel>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList></NewsList>} />
          <Route path="/contact" element={<ContactForm></ContactForm>} />
          <Route path="/quiz" element={<Quiz></Quiz>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
