const user = {
  id: 101,
  name: "varshini",
  email: "23eg112e19@anurag.edu.in",
  role: "student",
  isActive: true
};

// Read and print the user’s name and email
console.log('name',user.name,'email',user.email)

// Add a new property lastLogin: "2026-01-01"
user.lastLogin="2026-01-01"
console.log(user.lastLogin)

// Update role from "student" to "admin"
user.role='admin'
console.log(user.role)

// Delete the isActive property
delete user.isActive

//  Use Object.keys() to list all remaining fields
console.log(Object.keys(user))