import { projectFactory } from "./modules/utils/projectFactory";
import { getProjectArray, addNewProject, removeProject, updateProjectInfo, updateCurrentProject, getCurrentProject } from "./modules/utils/projectManager";

import { taskFactory } from "./modules/utils/taskFactory";
import { getTaskArray, addNewTask, removeTask, updateTaskInfo } from "./modules/utils/taskManager";

import { openProjectModal, closeProjectModal, submitProjectModal, updateMainHeader, openTaskModal, closeTaskModal, clearMainTaskList, submitTaskModal, populateTaskItems } from "./DOM";
import { taskBox } from "./modules/components/taskBox";
import { localStorageInit } from "./modules/utils/localStorage";

const addProjectBtn = document.querySelector('#add-project-btn')
const closeProjectBtn = document.querySelector('#close-project-btn')
const submitProjectBtn = document.querySelector('#submit-project-btn')

const addTaskBtn = document.querySelector('#add-task-btn')
const closeTaskBtn = document.querySelector('#close-task-btn')
const submitTaskBtn = document.querySelector('#submit-task-btn')

addTaskBtn.addEventListener('click', openTaskModal)
closeTaskBtn.addEventListener('click', closeTaskModal)
submitTaskBtn.addEventListener('click', submitTaskModal)

addProjectBtn.addEventListener('click', openProjectModal)
closeProjectBtn.addEventListener('click', closeProjectModal)
submitProjectBtn.addEventListener('click', submitProjectModal)

// Initializes storage
localStorageInit()

console.log(localStorage.getItem("projectsArray"))
console.log(localStorage.getItem("tasksArray"))

updateCurrentProject(0)


const handleProjectClick = (e) => {
    const element = e.target

    if (element.hasAttribute('data-project-index')) {
        const value = element.getAttribute('data-project-index')
        updateCurrentProject(value)
        const currentProject = getCurrentProject()
        updateMainHeader(currentProject)
        clearMainTaskList()
        populateTaskItems()

    }
}


// TESTING FUNCTIONS!!

document.body.addEventListener('click', handleProjectClick) 

// for testing purposes view clicked project in console
document.body.addEventListener('click', (e) => {
 
    const obj = getCurrentProject()
    console.log(`~~ current project ~~\ntitle: ${obj.title}\ndescription: ${obj.description}\nid: ${obj.id}`)

})



