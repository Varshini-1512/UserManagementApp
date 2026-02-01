let enrollmentDeadline = new Date("2026-01-20");

/*Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"*/
let dateObj=new Date();
if(dateObj<enrollmentDeadline)
    console.log("Enrollment Open")
else if(dateObj>enrollmentDeadline)
    console.log("Enrollment Closed")

/*Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/
let input_date=new Date("2026-02-30")
let year=date.getFullYear()
let month=date.getMonth()+1
let date=date.getDate()

console.log(month)

// if((month===0 && month===12) && (day>1 && day<=31)){
//     if(month)
// }else{
//     console.log("invalide")
// }