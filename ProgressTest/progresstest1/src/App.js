import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UserManager from './pages/userManager';
import { UserProvider } from './contexts/UserContext';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user-manager" element={
              <UserProvider>
                <UserManager />
              </UserProvider>
            } />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/accounts/:id" element={
              <UserProvider>
                <UserDetail />
              </UserProvider>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider >
    </>
  );
}

export default App;
