const marks = [78, 92, 35, 88, 40, 67];

// filter() marks ≥ 40 (pass marks)
let result1=marks.filter(ele=>ele>=40)
console.log(result1)

// map() to add 5 grace marks to each student
let result2=marks.map(ele=>ele+5)`11`
console.log(result2)

// reduce() to find highest mark
let result3=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(result3)

// find() first mark below 40
let result4=marks.find(ele=>ele<40)
console.log(result4)

// findIndex() of mark 92
let result5=marks.findIndex(ele=>ele===92)
console.log(result5)