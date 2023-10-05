import { projectFactory } from "./modules/utils/projectFactory"
import { addNewProject, getCurrentProjectId, getNewProjectId, getCurrentProject, getProjectsArray, removeProject, updateCurrentProject} from "./modules/utils/projectManager"
import { projectBox } from "./modules/components/projectBox"
import { addNewTask, getNewTaskId, getTasksArray, removeAllTasks, removeTask } from "./modules/utils/taskManager"
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

  const newId = getNewTaskId()

  const newTask = taskFactory(newId, getCurrentProjectId(), taskName, taskDescription, taskDate)
  addNewTask(newTask)
  taskBox(newId, taskName, taskDescription, taskDate)

  clearTaskModalInputs()
  closeTaskModal() 
}

// TASK MODAL FUNCTIONS END

// CONFIRM DELETE MODAL FUNCTIONS

export function openConfirmDelModal() {
  openOverlay()

  const project = getCurrentProject()
  const projName = document.querySelector('#confirm-name')
  const projName2 = document.querySelector('#confirm-name2')

  projName.innerText = project.title
  projName2.innerText = project.title

  const modal = document.querySelector('#confirm-del-modal')
  modal.style.display = 'block'
}

export function closeConfirmDelModal() {

  const projName = document.querySelector('#confirm-name')
  projName.innerText = ""

  const modal = document.querySelector('#confirm-del-modal')
  modal.style.display = 'none'
 
  closeOverlay()
}

export function submitConfirmDelModal() {
    const currentId = getCurrentProjectId()
    removeProjectDOM(currentId) 

    // WIP WIP WIP WIP WIP THIS IS NOT CORRECT ALWAYS NEED TO FIGURE OUT A WAY TO UPDATE THIS
    const nextId = currentId - 1

    removeAllTasks(currentId) 
    updateCurrentProject(nextId)
    updateMainHeader()
    clearMainTaskList() 
    populateTaskItems() 
 
     
    closeConfirmDelModal()


}

export function removeProjectDOM(index) {
  // removes deleted project data
  removeProject(index)

  // removes projectBox from project-list DOM
  const projectList = document.querySelector('#new-projects-container')
  const elements = projectList.children

  for (let i = 0; i < elements.length; i++) {
    const projectBox = elements[i]

    const data = projectBox.getAttribute('data-project-index') 
    const dataNum = parseInt(data)

    if (dataNum === index) {
      projectBox.remove()
    }
  }
}

// CONFIRM DELETE MODAL FUNCTIONS END 


// MAIN CONTENT FUNCTIONS --

/* function updates the title and subtitle of the main content div
   with the clicked project name and description */
export function updateMainHeader() {

  const obj = getCurrentProject()
  // console.log(`current is ${obj.title}`)

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

export function populateTaskItems() {

  const taskArray = getTasksArray()
  for (let i = 0; i < taskArray.length; i++) {

    const obj = taskArray[i]

    if (getCurrentProjectId() === 0) {
      taskBox(obj.id, obj.title, obj.description, obj.dueDate)}

    else if (obj.projectId === getCurrentProjectId()) {
      taskBox(obj.id, obj.title, obj.description, obj.dueDate)
    }
    
  }
}

export function removeTaskDOM(index) {
  // removes deleted task data
  removeTask(index)

  // removes taskBox from task-list DOM
  const taskList = document.querySelector('#task-list')
  const elements = taskList.children

  for (let i = 0; i < elements.length; i++) {
    const taskBox = elements[i]

    const data = taskBox.getAttribute('data-task-index')
    const dataNum = parseInt(data)

    if (dataNum === index) {
      taskBox.remove()
    }
  }
}

// MAIN CONTENT FUNCTIONS END --


// DOM functions for the sidebar

// this function populates sidebar with button DOM elements

export function populateSideBarBtns() {

  const projectsArray = getProjectsArray()

  for (let i = 0; i < projectsArray.length; i++) {

    const obj = projectsArray[i]
    // if statement to ensure sidebar is not populated with the deafault task
    // default "All Tasks" is hard coded in!!
    if (obj.id !== 0) {
      projectBox(obj.id, obj.title)
    }
  }
}













