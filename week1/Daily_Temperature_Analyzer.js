const temperatures = [32, 35, 28, 40, 38, 30, 42];

// temperatures above 35
let result1=temperatures.filter(ele=>ele>35)
console.log(result1)

// convert all temperatures from Celsius → Fahrenheit
let result2=temperatures.map(ele=>ele+32)
console.log(result2)

// calculate average temperature
let result3=temperatures.reduce((acc,ele)=>acc+ele)
console.log(result3/temperatures.length)

// first temperature above 40
let result4=temperatures.find(ele=>ele>40)
console.log(result4)

// Index of temperature 28
let result5=temperatures.findIndex(ele=>ele===28)
console.log(result5)