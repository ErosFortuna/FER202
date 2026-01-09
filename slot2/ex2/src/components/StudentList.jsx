import About from "./About";
import { students } from "../listOfStudent";

function StudentList() {
  return (
    <div className="container mt-4">
      <div className="row">
        {students.map(student => (
          <div className="col-md-4 mb-4" key={student.id}>
            <About student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
