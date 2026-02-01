let dob = "2000-05-15";

let date=new Date(dob)

// Calculate exact age in years
let cur_date=new Date();
let age=(cur_date.getFullYear()-date.getFullYear())
if((cur_date.getMonth()+1)==date.getMonth()){
    if(cur_date.getDate()>date.getDate())
        age--
}
else if((cur_date.getMonth()+1)<date.getMonth())
    age--
console.log(age)