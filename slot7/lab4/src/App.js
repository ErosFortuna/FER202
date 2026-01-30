import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuantitySelector from './components/QuantitySelector';
import ProcessOrderModal from './components/ProcessOrderModal';
import ProductForm from './components/ProductForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExerciseNavBar from './components/ExerciseNavBar';
import QuantitySelector2 from './components/QuantitySelector2';
import ProcessOrderModal2 from './components/ProcessOrderModal2';
import ProductForm2 from './components/ProductForm2';
import ToDoList2 from './components/ToDoList2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ExerciseNavBar />

        <div className="container mt-4">
          <Routes>
            <Route path="/QuantitySelector2" 
            element={<QuantitySelector2 initialValue={0} onChange={(qty) => console.log("Số lượng:", qty)} />} />
            <Route path="/ProcessOrderModal2" 
            element={<ProcessOrderModal2 />} />
            <Route path="/ProductForm2" element={<ProductForm2 />} />
            <Route path="/TodoList2" element={<ToDoList2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
