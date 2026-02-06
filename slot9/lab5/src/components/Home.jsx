import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>1. Thông tin tác giả </Card.Title>
          <Card.Text>
          * <strong>Mã SV:</strong> DE190723 <br/>
          * <strong>Họ tên:</strong> quoc <br/>
          * <strong>GitHub:</strong> <a href="https://github.com/ErosFortuna/FER202">Link Github</a>
        </Card.Text>
        <hr />
        <Card.Title>2. Cấu trúc project </Card.Title>
        <p>Project được tổ chức theo cấu trúc Component-based với React-Bootstrap.</p>
      </Card.Body>
    </Card>
  </Container>
);
}

export default Home;