export const newTask = (id, title, description, projectId, dueDate, isDone = false) => {
    
  return {id, title, description, projectId, dueDate, isDone}
}