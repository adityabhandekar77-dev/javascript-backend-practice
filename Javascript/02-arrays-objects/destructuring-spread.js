const games = ["Minecraft", "CS2", "GTA"];

const [first, second, third] = games;

console.log(first);
console.log(second);

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers);

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const skills = [...frontend, ...backend];

console.log(skills);


const student = {
    name: "Aditya",
    course: "BCA",
    cgpa: 8.95,
    skills: ["C", "C++", "JavaScript"]
};



const { name, course, cgpa, skills } = student;

console.log(`${name} studies ${course}`);
console.log(`CGPA: ${cgpa}`);



const [first, second, third] = skills;

console.log(first);
console.log(second);
console.log(third);



const updatedStudent = {
    ...student,
    cgpa: 9.1,
    year: 2
};

console.log("\nOriginal Student:");
console.log(student);

console.log("\nUpdated Student:");
console.log(updatedStudent);

console.log(`Updated CGPA: ${updatedStudent.cgpa}`);
console.log(`Year: ${updatedStudent.year}`);


