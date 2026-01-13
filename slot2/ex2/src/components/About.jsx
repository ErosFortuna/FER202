import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function About({ student }) {
  return (
    <Card className="student-card h-100 shadow-sm">
      <div className="img-wrapper">
        <Card.Img
          variant="top"
          src={student.avatar || "/imgs/default-avatar.png"}
          alt={student.name}
          className="student-img"
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          Age: {student.age} <br />
          Grade: {student.grade}
        </Card.Text>
        <Button variant="outline-primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default About;
