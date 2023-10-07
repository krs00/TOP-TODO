let currentTaskId = null

export function getCurrentTaskId() {
  return currentTaskId
}

export function updateCurrentTaskId(id) {
  currentTaskId = id
}

export function resetCurrentTaskId() {
  currentTaskId = null
}


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

  if (!tasksArray.length) {

    return 0
  }
  
  else if (tasksArray.length) {

    const lastTask = tasksArray[tasksArray.length - 1];
    const newId = lastTask.id + 1
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

// removes all tasks associated with a project id
export const removeAllTasks = (id) => {
  const tasksArray = getTasksArray()

  const newArray = tasksArray.filter(item => item.projectId !== id);

  saveTasksArray(newArray)

};

export const getCurrentTask = (id) => {
  const arrayJson = localStorage.getItem("tasksArray")
  const array = JSON.parse(arrayJson)

  for (let i = 0; i < array.length; i++) {
    const obj = array[i]

    if (obj.id === id) {
      return obj
    }
  }


}