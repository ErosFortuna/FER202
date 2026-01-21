import Container from 'react-bootstrap/Container';
import PizzaCard from './PizzaCard';
import { pizzaData } from '../data/pizzaList'; 
import { Row } from 'react-bootstrap';


function PizzaList() {
  return (
    <Container fluid className="my-10 d-flex flex-wrap justify-content-center bg-dark text-white">
        {/* <Row> */}
       {pizzaData.map((pizza) => (
          <PizzaCard pizza={pizza} />
        ))}
        {/* </Row> */}
      </Container>
  );
}

export default PizzaList;