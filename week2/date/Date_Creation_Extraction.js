// Create a Date object for current date & time
let dateObj=new Date();
console.log(dateObj)

/*Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds*/
console.log('Year:',dateObj.getFullYear())
console.log('month:',dateObj.getMonth())
console.log('Date:',dateObj.getDate())
console.log('Day',dateObj.getDay())
console.log('Hours',dateObj.getHours())
console.log('min',dateObj.getMinutes())
console.log('sec',dateObj.getSeconds())

/*Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
console.log(dateObj.getDate()+'-'+(dateObj.getMonth()+1)+'-'+dateObj.getFullYear(),
dateObj.getHours()+':'+dateObj.getMinutes()+':'+dateObj.getSeconds())
// console.log(dateObj.toString())
