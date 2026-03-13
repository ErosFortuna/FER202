import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import ExpensesDashboard from './components/ExpenseDashboard';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {/* Các route khác của bạn sẽ được đặt ở đây */}
          <Route path="/" element={
            <ProtectedRoute>
              <ExpensesDashboard />
            </ProtectedRoute>
          } />
        </Routes>


      </BrowserRouter>
    </Provider>
  );
}

export default App;

