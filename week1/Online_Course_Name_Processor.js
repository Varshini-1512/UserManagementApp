const courses = ["javascript", "react", "node", "mongodb", "express"];

// filter() courses with name length > 5
let result1=courses.filter(ele=>ele.length>5)
console.log(result1)

//  map() to convert course names to uppercase
let result2=courses.map(ele=>ele.toUpperCase())
console.log(result2)

// reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let result3=courses.reduce((acc,ele)=>acc.toUpperCase()+' | '+ele.toUpperCase())
console.log(result3)

// find() the course "react"
let result4=courses.find(ele=>ele==='react')
console.log(result4)

// findIndex() of "node"
let result5=courses.findIndex(ele=>ele==='node')
console.log(result5)
