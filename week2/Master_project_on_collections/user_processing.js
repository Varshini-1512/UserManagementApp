const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// Get only active users
const activeUsers=users.filter(user=>user.active)
console.log(activeUsers);

// Extract names of active users
const activeUserNames=activeUsers.map(user=>user.name);
console.log(activeUserNames);

// Check if any admin exists
const hasAdmin=users.some(user=>user.role==="admin");
console.log(hasAdmin);

// Find user by id
const foundUser=users.find(user=>user.id===2);
console.log(foundUser);

// Deactivate a user immutably
const updatedUsers=users.map(user=>
user.id===1
?{...user,active:false}
:user
);
console.log(updatedUsers);