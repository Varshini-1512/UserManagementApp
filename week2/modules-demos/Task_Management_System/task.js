// Import validator functions
import {validateTitle,validatePriority,validateDueDate} from "./validator.js";


const tasks=[];
let nextId=1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  // Validate using imported functions
  // If valid, add to tasks array
  // Return success/error message
  if(!validateTitle(title))
    return"Invalid title";
  if(!validatePriority(priority))
    return"Invalid priority";
  if(!validateDueDate(dueDate))
    return"Invalid due date";

  const newTask={
  id:nextId++,
  title:title,
  priority:priority,
  dueDate,
  completed:false
  };

  tasks.push(newTask);
  return"Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task=tasks.find(t=>t.id===taskId);
  if(!task)
    return"Task not found";
  task.completed=true;
  return"Task marked as complete";
}

// Export functions
export{addTask,getAllTasks,completeTask};
