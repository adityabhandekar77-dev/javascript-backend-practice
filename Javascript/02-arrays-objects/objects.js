const player = {
    name: "Aditya",
    age: 20,
    score: 850,
    isBanned: false,
    games: ["CS2", "Minecraft", "GTA"]
};

console.log(player.name);
console.log(player.age);
console.log(player.score);


const student = {
    name: "Aditya",
    age: 20,
    course: "BCA",
    marks: 8.95,
    skills: ["C", "C++", "JavaScript"]
};



student.skills.push("Node.js");
student.isPassed = true;



console.log(`Student: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Course: ${student.course}`);
console.log(`Marks: ${student.marks}`);

console.log("\nSkills:");

student.skills.forEach(skill => {
    console.log(skill);
});

console.log(`\nPassed: ${student.isPassed}`);





