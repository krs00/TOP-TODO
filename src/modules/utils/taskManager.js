const taskManager = {
  taskIdCounter: 0,
  taskArray: [],
  currentTask: null,
};

export const getTaskArray = () => {
  taskManager.taskArray;
  return taskManager.taskArray; 
};

export const addNewTask = (obj) => {
  taskManager.taskArray.push(obj);
  incrementTaskIdCounter()  
};

export const removeTask = (id) => {
  const array = taskManager.taskArray

  const newArray = array.filter(item => item.id !== id);

  taskManager.taskArray = newArray

};

export const getNewTaskId = () => {
  return taskManager.taskIdCounter
};

const incrementTaskIdCounter = () => {
  taskManager.taskIdCounter ++;
};

export const updateTaskInfo = (id, title, desc, dueDate) => {

  const array = taskManager.taskArray

  for (let i = 0; i < array.length; i++) {

    const task = array[i]

    if (task.id === id) {

      task.title = title
      task.description = desc
      task.dueDate = dueDate
    }

  }
  
}

export const updateCurrentTask = (id) => {
  const array = taskManagerManager.taskArray

  for (let i = 0; i < array.length; i++) {

    const task = array[i]

    if (task.id === id) {

      taskManager.currentTask = task
    }
  }
}

export const getCurrentTask = () => {
  return taskManager.currentTask
}