const courses=[
{ id:101,title:"JavaScript",price:999,published:true },
{ id:102,title:"React",price:1499,published:false },
{ id:103,title:"Node",price:1299,published:true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// Merge cart with courses to get full course info
const detailedCart=cart.map(item=>{
const course=courses.find(c=>c.id===item.courseId);
return{...item,...course};
});
console.log(detailedCart)

// Calculate total cart amount
const totalAmount=detailedCart.reduce(
(sum,item)=>sum+item.price*item.qty,0
);
console.log(totalAmount);

// Increase quantity of a course (immutably)
const increasedCart=cart.map(item=>
item.courseId===101
?{...item,qty:item.qty+1}
:item
);
console.log(increasedCart);

// Remove a course from cart
const updatedCart=cart.filter(item=>item.courseId!==103);
console.log(updatedCart);

// Check if all cart items are paid courses
const allPaid=detailedCart.every(item=>item.price>0);
console.log(allPaid);