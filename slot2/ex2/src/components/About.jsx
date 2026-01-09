//khai bao 1 doi tuong gom id,name,avatar,grade
//in thongg tin cua h1,pvaf img
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function About({ student }) { 
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={student.avatar} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
        <Card.Text>Grade: {student.grade}</Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}

    export default About;