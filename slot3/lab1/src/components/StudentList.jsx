import React from 'react';
import { studentsData } from '../data/studentData';
import Student from './Student';

function StudentList() {
    return (
        <div className="container mt-4">
            <div className="row">
                {studentsData.map(student => (
                    <div className="col-md-4 mb-4" key={student.id}>
                        <Student student={student} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentList;
