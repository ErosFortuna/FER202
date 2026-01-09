//khai bao 1 doi tuong gom id,name,avatar,grade
//in thongg tin cua h1,pvaf img
import { Button } from 'react-bootstrap';



function About() {


    const student = {
        id: 1,
        name: "Nguyen Van A",
        avatar: "/imgs/4c19971180d8fbbc522bfe3315fa168b.jpg",
        age: 20,
        grade: "A"
    };
    console.log(student);
    return (
     <div className="container mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={student.avatar}
          className="card-img-top"
          alt="avatar"
        />

        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">ID: {student.id}</p>
          <p className="card-text">Age: {student.age}</p>
          <p className="card-text">Grade: {student.grade}</p>
        </div>
        <Button variant="primary">Go somewhere</Button>
      </div>
    </div>
    );

    }

    export default About;