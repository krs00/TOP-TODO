import { projectFactory } from "./modules/utils/projectFactory"
import { addNewProject, getCurrentProjectId, getNewProjectId, getProjectArray } from "./modules/utils/projectManager"
import { projectBox } from "./modules/components/projectBox"
import { addNewTask, getNewTaskId, getTaskArray } from "./modules/utils/taskManager"
import { taskFactory } from "./modules/utils/taskFactory"
import { taskBox } from "./modules/components/taskBox"

function openOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = 'block'
}

function closeOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = 'none'
}


// PROJECT MODAL FUNCIONS

export function openProjectModal() {
  openOverlay()
  const modal = document.querySelector('#add-project-modal')
  modal.style.display = 'block'
}

export function closeProjectModal() {
  closeOverlay()
  clearProjectModalInputs()
  const modal = document.querySelector('#add-project-modal')
  modal.style.display = 'none'
}

function clearProjectModalInputs() {
  const projectName = document.querySelector('#project-name-input')
  const projectDescription = document.querySelector('#project-description-input')

  projectName.value = ''
  projectDescription.value = ''

}

export function submitProjectModal() {
  const projectName = document.querySelector('#project-name-input').value
  const projectDescription = document.querySelector('#project-description-input').value

  // console.log(projectName)
  // console.log(projectDescription)
  const newId = getNewProjectId()

  const newProject = projectFactory(newId, projectName, projectDescription)
  projectBox(newId, projectName)
  addNewProject(newProject) 

  // console.log(getProjectArray()) 

  clearProjectModalInputs()
  closeProjectModal() 

}

// PROJECT MODAL FUNCTIONS END

// TASK MODAL FUNCTIONS

export function openTaskModal() {
  openOverlay()
  const modal = document.querySelector('#add-task-modal') 
  modal.style.display = 'block'
}

export function closeTaskModal() {
  closeOverlay()
  const modal = document.querySelector('#add-task-modal')
  modal.style.display = 'none'
  clearTaskModalInputs()
}

function clearTaskModalInputs() {
  const taskName = document.querySelector('#task-name-input')
  const taskDescription = document.querySelector('#task-description-input')
  const taskDate = document.querySelector('#task-date-input')

  taskName.value = ''
  taskDescription.value = ''
  taskDate.value = ''

}

export function submitTaskModal() {
  const taskName = document.querySelector('#task-name-input').value
  const taskDescription = document.querySelector('#task-description-input').value
  const taskDate = document.querySelector('#task-date-input').value

  // console.log(projectName)
  // console.log(projectDescription)
  const newId = getNewTaskId()

  const newTask = taskFactory(newId, getCurrentProjectId(), taskName, taskDescription, taskDate)
  // projectBox(newId, projectName)
  addNewTask(newTask)
  taskBox(taskName, taskDescription, taskDate)

  console.log(getTaskArray())

  clearTaskModalInputs()
  closeTaskModal() 
}

export function populateTaskItems() {

  const taskArray = getTaskArray()
  console.log(getTaskArray())
  for (let i = 0; i < taskArray.length; i++) {

    const obj = taskArray[i] 
    if (obj.projectId === getCurrentProjectId()) {
      taskBox(obj.title, obj.description, obj.dueDate)
    } 
  }
}

// TASK MODAL FUNCTIONS END


// MAIN CONTENT FUNCTIONS

/* function updates the title and subtitle of the main content div
   with the clicked project name and description */
export function updateMainHeader(obj) {
  const title = document.querySelector('#content-project-name')
  const desc = document.querySelector('#content-project-description')

  title.innerText = obj.title
  desc.innerText = obj.description
}

// clears main content task list DOM nodes (for switching between tabs)
export function clearMainTaskList() {
  const taskList = document.querySelector('#task-list')
  taskList.innerHTML = "" 
}













