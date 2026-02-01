const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products
let result1=cart.filter(cartObj=>cartObj.inStock===true)
console.log(result1)

// Use map() to create a new array with:  { name, totalPrice }
let result2=cart.map(ele=>{
  let arr=[ele.name,ele.price*ele.quantity]
  return arr
})
console.log(result2)

// Use reduce() to calculate grand total cart value
let result3=cart.reduce((acc,ele)=>acc+ele.price*ele.quantity,0)
console.log(result3)

// Use find() to get details of "Mouse"
let result4=cart.find(ele=>ele.name==='Mouse')
console.log(result4)

// Use findIndex() to find the position of "Keyboard"
let result5=cart.findIndex(ele=>ele.name==='Keyboard')
console.log(result5)