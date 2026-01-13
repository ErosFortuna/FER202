import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>
             Top 5 Most Beautiful Women
          </Navbar.Brand>
        </Container>
      </Navbar>

     
      <Container>
        <StudentList />
      </Container>
    </>
  );
}

export default App;
