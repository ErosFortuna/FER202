import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuantitySelector from './components/QuantitySelector';
import ProcessOrderModal from './components/ProcessOrderModal';
import ProductForm from './components/ProductForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExerciseNavBar from './components/ExerciseNavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ExerciseNavBar />

        <div className="container mt-4">
          <Routes>
            <Route path="/QuantitySelector" element={<QuantitySelector initialValue={0} onChange={(qty) => console.log("Số lượng:", qty)} />} />
            <Route path="/ProcessOrderModal" element={<ProcessOrderModal />} />
            <Route path="/ProductForm" element={<ProductForm />} />
            <Route path="/TodoList" element={<TodoList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
