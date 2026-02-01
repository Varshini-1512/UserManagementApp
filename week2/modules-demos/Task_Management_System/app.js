// Import task functions
import{addTask,getAllTasks,completeTask} from"./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript","high","2026-02-01"));
console.log(addTask("Build Todo App","medium","2026-02-10"));
console.log(addTask("Revise MERN","low","2026-02-15"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(2));

// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());