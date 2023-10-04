// const taskManager = {
//   taskIdCounter: 0,
//   taskArray: [],
//   currentTask: null,
// };

export const getTasksArray = () => {
  const tasksArrayString = localStorage.getItem("tasksArray");
  const tasksArray = JSON.parse(tasksArrayString);

  return tasksArray;
};

const saveTasksArray = (array) => {
 
  localStorage.setItem("tasksArray", JSON.stringify(array));
};

export const addNewTask = (obj) => {
  const tasksArray = getTasksArray()
  tasksArray.push(obj);
  saveTasksArray(tasksArray) 
};

export const removeTask = (id) => {
  const tasksArray = getTasksArray()

  const newArray = tasksArray.filter(item => item.id !== id);

  saveTasksArray(newArray)

};

export const getNewTaskId = () => {
  const tasksArray = getTasksArray()

  const lastTask = tasksArray[tasksArray.length - 1];

  const newId = lastTask.id + 1

  if (lastTask === null) {
    return 0
  } else {
    return newId
  }
};

export const updateTaskInfo = (id, title, desc, dueDate) => {

  const array = getTasksArray()

  for (let i = 0; i < array.length; i++) {

    const task = array[i]

    if (task.id === id) {

      task.title = title
      task.description = desc
      task.dueDate = dueDate
    }

  }
  saveTasksArray(array) 
}

export const updateCurrentTask = (id) => {
  const array = getTasksArray()

  for (let i = 0; i < array.length; i++) {

    const obj = array[i]

    if (obj === null) {
      localStorage.setItem("currentTask", JSON.stringify({})); 
    }

    if (obj.id === id) {

      localStorage.setItem("currentTask", JSON.stringify(obj));
    }
  }
}

export const getCurrentTask = () => {
  const currentTaskString = localStorage.getItem("currentTask")
  const currentTask = JSON.parse(currentTaskString)
  return currentTask
}

export const getCurrentTaskId = () => {
  const currentTaskString = localStorage.getItem("currentTask")
  const currentTask = JSON.parse(currentTaskString)
  return currentTask.id
}