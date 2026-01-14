import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { studentData } from '../data/studentData';


function Student({ student }) {

    console.log(student);

    return (
        <>
            <Card className='student-card' style={{ width: '18rem' }}>
                <div className="img-wrapper">
                    <span className="top-badge">TOP</span>
                    <Card.Img
                        src={student.avatar}
                        className="student-img"
                    />
                </div>
                <Card.Body>
                    <Card.Title>{student.id}</Card.Title>
                    <Card.Text>
                        {student.name} - Age: {student.age} - Grade: {student.grade}
                    </Card.Text>
                   <Button className="custom-btn">View Profile</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Student;
