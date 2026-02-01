// If both conditions are true → "Enroll Now"
// Otherwise → "Complete Requirements"
// Use ternary operator
// Store result in enrollMessage
// Print message

let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage=(hasCompletedBasics && hasPaid)?"Enroll Now":"Complete Requirements"
console.log(enrollMessage)