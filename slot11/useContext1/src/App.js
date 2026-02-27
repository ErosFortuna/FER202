import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider,useTheme } from './context/ThemeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';

import LightSwitch from './components/LightSwitch';
import CounterComponent from './components/CounterComponents';
import LoginForm from './components/LoginForm';
import AppNavbar from './components/AppNavbar';

import { useContext } from "react";


// ===== Protected Route =====
function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


// ===== Layout sau khi login =====
function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <AppNavbar />

      <div className="p-4">
        <Routes>
          <Route path="/counter" element={<CounterComponent />} />
          <Route path="/light" element={<LightSwitch />} />
          <Route path="*" element={<Navigate to="/counter" />} />
        </Routes>
      </div>
    </div>
  );
}


// ===== App =====
function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>

          <Routes>

            {/* Login */}
            <Route path="/login" element={<LoginForm />} />

            {/* Protected Area */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            />

          </Routes>

        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;