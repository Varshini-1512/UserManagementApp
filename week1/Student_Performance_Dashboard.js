const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter() students who passed (marks ≥ 40)
let result=student.filter(stuObj=>stuObj.marks>=40)
console.log(result)

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let result2=students.map(ele=>{
let grade
if(ele.marks>=90)grade="A"
else if(ele.marks>=75)grade="B"
else if(ele.marks>=60)grade="C"
else grade="D"
return {...ele,grade}
})
console.log(result2)

// reduce average marks
let result3=students.reduce((acc,ele)=>acc+ele.marks,0)
console.log(result3/students.length)

// find student with 92
let result4=students.find(ele=>ele.marks===92)
console.log(result4)

// findIndex of Kiran
let result5=students.findIndex(ele=>ele.name==="Kiran")
console.log(result5)
