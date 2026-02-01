// Smart Login Status Engine

let isLoggedIn=true;
let isProfileComplete=false;
let message;
// If user is not logged in → show "Please login"
if(isLoggedIn==false)
    message='Please login'
// If logged in but profile incomplete → show "Complete your profile"
else if(isLoggedIn==true && isProfileComplete==false)
    message='complete your profile'
// If logged in and profile complete → show "Welcome back!"
else if(isLoggedIn==true && isProfileComplete==true)
    message='welcome back!'
// Print the message
console.log(message)

