// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if(title.length===0)
    return 'Title is empty'
  if(title.length<3)
    return "Title should have min 3 chars"
  return true;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  if(priority==='low'||priority==='medium'||priority==='high')
    return true
  return false
}

// 3. Validate due date (must be future date)
function validateDueDate(date){
  const due=new Date(date);
  if(isNaN(due))
    return false;   // invalid date string
  const cur_date=new Date();
  cur_date.setHours(0,0,0,0);       // ignore time
  return due>=cur_date;
  // let cur_date=new Date();
  // if(cur_date<date)
  //   return true
  // return false
}

export {validateTitle,validatePriority,validateDueDate}