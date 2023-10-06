import { projectFactory } from "./modules/utils/projectFactory"
import { addNewProject, getCurrentProjectId, getNewProjectId, getCurrentProject, getProjectsArray, removeProject, updateCurrentProject, updateProjectInfo} from "./modules/utils/projectManager"
import { projectBox } from "./modules/components/projectBox"
import { addNewTask, getNewTaskId, getTasksArray, removeAllTasks, removeTask } from "./modules/utils/taskManager"
import { taskFactory } from "./modules/utils/taskFactory"
import { taskBox } from "./modules/components/taskBox"
import { getIsEditing, toggleEditingFalse, toggleEditingTrue } from "./modules/utils/isEditing"

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
  toggleEditingFalse()

  const title = document.querySelector('#project-modal-title')
  title.innerText = `*ੈ✩‧₊˚ add a project! ஃ` 

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
  if (getIsEditing() === false) {
    submitAddProject() 
  } else if (getIsEditing() === true) {
    submitEditProject()
  }
}

function submitAddProject() {
  const projectName = document.querySelector('#project-name-input').value
  const projectDescription = document.querySelector('#project-description-input').value

  const newId = getNewProjectId()

  const newProject = projectFactory(newId, projectName, projectDescription)
  projectBox(newId, projectName)
  addNewProject(newProject)

  closeProjectModal() 
}

function submitEditProject() {
  const obj = getCurrentProject()

  const projectName = document.querySelector('#project-name-input').value
  const projectDescription = document.querySelector('#project-description-input').value

  const title = document.querySelector('#content-project-name')
  const desc = document.querySelector('#content-project-description')

  title.innerText = projectName
  desc.innerText = projectDescription


  // update DOM element in projects list
  const projectList = document.querySelector('#new-projects-container')
  const elements = Array.from(projectList.children);
  
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] 
    const elementDataIndex = element.getAttribute('data-project-index')
    const elementDataIndexNum = parseInt(elementDataIndex)

    if (elementDataIndexNum === obj.id) {
      element.innerText = projectName
    }
  }

  updateProjectInfo(obj.id, projectName, projectDescription) 
  closeProjectModal()
}

export function openEditProjectModal() {

  toggleEditingTrue()

  const obj = getCurrentProject()

  const nameInput = document.querySelector('#project-name-input')
  const descInput = document.querySelector('#project-description-input')
  const title = document.querySelector('#project-modal-title')
  title.innerText = `*ੈ✩‧₊˚ edit ${obj.title}! ஃ`

  nameInput.value = obj.title
  descInput.value = obj.description


  openProjectModal()
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
  toggleEditingFalse() 
}

function clearTaskModalInputs() {
  const taskName = document.querySelector('#task-name-input')
  const taskDescription = document.querySelector('#task-description-input')
  const taskDate = document.querySelector('#task-date-input')

  taskName.value = ''
  taskDescription.value = ''
  taskDate.value = ''

}

// WIP WIP WIP WIP WIP working on submitting task modal!!!

export function submitTaskModal() {

  const editing = getIsEditing()

  if (editing === false) {
    submitAddTask()
  } else if (editing === true) {

  }

}

function submitAddTask() {
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
    const nextId = findNextId(currentId)
    removeProjectDOM(currentId) 

    removeAllTasks(currentId) 
    updateCurrentProject(nextId)
    updateMainHeader()
    clearMainTaskList() 
    populateTaskItems()
    toggleMenuBtns()
 
     
    closeConfirmDelModal()
}

export function findNextId(currentId) {
  const projectList = document.querySelector('#new-projects-container')
  const elements = Array.from(projectList.children);
  
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] 
    const elementDataIndex = element.getAttribute('data-project-index')
    const elementDataIndexNum = parseInt(elementDataIndex)

    if (elementDataIndexNum === currentId) {
      const index = elements.indexOf(element)
      const newIndex = index - 1
      return newIndex 
    }
  }
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


// function to check if edit and delte buttons should show for projects
// edit and delete should not be visible on "All Tasks" project

export function toggleMenuBtns() {

  const currentId = getCurrentProjectId()

  const editBtn = document.querySelector("#edit-project-btn")
  const delBtn = document.querySelector("#del-project-btn")

  if (currentId === 0) {
    editBtn.style.display = "none";
    delBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline-block"; 
    delBtn.style.display = "inline-block";
  }
}













