import logo from './logo.svg';
import './App.css';
import NavBar from './components/FoodNavBar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodNavBar from './components/FoodNavBar';
import Home from './components/Home';
import MyCarousel from './components/FoodCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bannerImages } from './data/bannerImages';
import NewsList from './components/NewList';
import ContactForm from './components/ContactForm';
import Quiz from './components/Quiz';
// import User from './components/User';
// import Post from './components/Post';
import { createResource, fetchUser, fetchPost } from './API/API';

const User = React.lazy(() => import('./components/User'));
const Post = React.lazy(() => import('./components/Post'));


const userResource = createResource(fetchUser(1));
const postResource = createResource(fetchPost(1));

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
          <Route path="/user" element={
            <React.Suspense fallback={<div>Loading User...</div>}>
              <User userResource={userResource} />
            </React.Suspense>
          } />
          <Route path="/post" element={
            <React.Suspense fallback={<div>Loading Post...</div>}>
              <Post postResource={postResource} />
            </React.Suspense>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
