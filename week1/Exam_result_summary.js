const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0,c=0,max=0

// Calculate total marks
// Calculate average marks
// Find the highest scoring subject

for(let i in marks){
    sum+=(marks[i])
    c++
    if(marks[i]>max)
        max=marks[i]
}
console.log('total',sum)
console.log('average',sum/c)
console.log('maximum',max)

// Add a new subject computer: 90
marks.computer=90
console.log(Object.keys(marks))