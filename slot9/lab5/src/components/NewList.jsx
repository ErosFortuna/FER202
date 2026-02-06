import Container from 'react-bootstrap/Container';
import NewCard from './NewCard';
import { newsData } from '../data/newList';
import { Row } from 'react-bootstrap';


function NewsList() {
  return (
    <Container fluid className="my-10 d-flex flex-wrap justify-content-center bg-dark text-white">
       {newsData.map((news) => (
          <NewCard news={news} />
        ))}
      </Container>
  );
}

export default NewsList;