import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { ExpenseProvider } from './contexts/ExpenseContext';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
              <ExpenseProvider>
                <Home />
              </ExpenseProvider>
            } />

          </Routes>
        </BrowserRouter>
      </AuthProvider >
    </>
  );
}

export default App;
