//khai bao 1 doi tuong gom id,name,avatar,grade
//in thongg tin cua h1,pvaf img



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
        <div>
            <h1>Student Information</h1>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <h1>avatar:<img src={student.avatar} alt="avatar" /></h1>
        </div>
    );

    }

    export default About;