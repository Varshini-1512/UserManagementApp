const transactions=[
  {id:1,type:"credit",amount:5000},
  {id:2,type:"debit",amount:2000},
  {id:3,type:"credit",amount:10000},
  {id:4,type:"debit",amount:3000}
];

// filter() all credit transactions
let result1=transactions.filter(ele=>ele.type==="credit");
console.log(result1);

// map() to extract only transaction amounts
let result2=transactions.map(ele=>ele.amount);
console.log(result2);

// reduce() to calculate final account balance
// credit → add, debit → subtract
let result3=transactions.reduce((balance,ele)=>{
  return ele.type==="credit"?balance+ele.amount:balance-ele.amount;
}, 0);
console.log(result3);

// find() the first debit transaction
let result4=transactions.find(ele=>ele.type==="debit");
console.log(result4);

// findIndex() of transaction with amount 10000
let result5=transactions.findIndex(ele=>ele.amount===10000);
console.log(result5);
