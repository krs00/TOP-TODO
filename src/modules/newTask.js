export const newTask = (id, title, description, projectName, dueDate, isDone = false) => {
    
  return {id, title, description, projectName, dueDate, isDone}
}