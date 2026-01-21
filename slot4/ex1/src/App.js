import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavbarMain from './components/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PizzaList from './components/PizzaList';
import Carousels from './components/Carousels';
import Form from './components/Form';
import { bannerImages } from './data/bannerImages';

function App() {
  return (
    <Router>
      <NavbarMain />
      <Carousels bannerImages={bannerImages} />
      <Routes>
        <Route path="/" element={
          <>
            <PizzaList />
            <Form />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer myProfile={{
        name: "quoc",
        email: "quoc@gmail.com",
        avatar: "./images/anime-cat-sitting-ground-looking-sky-generative-ai_901003-60894.png"
      }}
      />
    </Router>
  );
}

export default App;
