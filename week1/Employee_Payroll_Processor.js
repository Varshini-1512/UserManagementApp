const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// filter() employees from IT department
let result=employees.filter(empObj=>empObj.department==['IT'])
console.log(result)

// map() to add: netSalary = salary + 10% bonus
let result1=employees.map(empObj=>{
        empObj.netSalary=empObj.salary+empObj.salary*0.10;
    return empObj
})
console.log(result1)

// reduce() to calculate total salary payout
let result2=employees.reduce((alc,ele)=>alc+ele.salary,0)
console.log(result2)

// find() employee with salary 30000
let result3=employees.find(eleObj=>eleObj.salary===30000)
console.log(result3)

// findIndex() of employee "Neha"
let result4=employees.findIndex(ele=>ele.name==='Neha')
console.log(result4)