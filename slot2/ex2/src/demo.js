const x =5;
console.log(`the value of x is: ${x}`);
//kiem tra x la duong hay am 
if(x>0){
    console.log(`${x} la so duong`);
}else{
    console.log(`${x} la so am`);
};

//arrow funtion 2 tham so in ra ten tuoi
let greeting = (name,age="18")=>{
    console.log(`chao mung ${name}, ban ${age} tuoi `);
}

console.log(greeting("quoc",21));
console.log(greeting("an"));

//viet arrow funtion binh phuong cua 1 so x

let square = (x)=>{
    return x*x;
}

console.log(square(5));

//viet ham in doi tuong student gom att id name age grade

let student = {
    id:1,
    name:"quoc",
    age:"21",
    grade:"13",
    studentInfo() {
        return `${this.name}, ${this.age}, ${this.grade}`;
    }
}

console.log(student.studentInfo());

//khai bao 1 list of student va goi ham print student trong list
let printStudent = (student) =>{
    console.log(`${student.id},${student.name},${student.age},${student.grade}`)
}

let students = [
  { id: 1, name: "Quoc", age: 21, grade: 13 },
  { id: 2, name: "An", age: 20, grade: 12 },
  { id: 3, name: "Binh", age: 22, grade: 14 },
  { id: 4, name: "Chi", age: 19, grade: 11 },
  { id: 5, name: "Dung", age: 23, grade: 15 },
  { id: 6, name: "Huy", age: 21, grade: 13 },
  { id: 7, name: "Khanh", age: 20, grade: 12 },
  { id: 8, name: "Linh", age: 22, grade: 14 },
  { id: 9, name: "Minh", age: 19, grade: 11 },
  { id: 10, name: "Nam", age: 23, grade: 15 }
];

students.forEach(student => {
    printStudent(student);
});

const [studentA,studentB,...restStudent]=students;
console.log("studentA: ",studentA);
console.log("studentB: ",studentB);
console.log("reststudent: ",restStudent);
    
// them 1 student moi vao rest student su dung spread operator
const newStudent = { id: 11, name: "Phong", age: 18, grade: 10 };
const newRestStudent = [...restStudent, newStudent];
console.log("newRestStudent: ", newRestStudent);


