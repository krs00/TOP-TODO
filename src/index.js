import {updateCurrentProject, getCurrentProject} from "./modules/utils/projectManager";
 
import { openProjectModal, closeProjectModal, submitProjectModal, updateMainHeader, openTaskModal, closeTaskModal, clearMainTaskList, submitTaskModal, populateTaskItems, populateSideBarBtns, removeTaskDOM } from "./DOM";
import { localStorageInit } from "./modules/utils/localStorage";
import { removeTask } from "./modules/utils/taskManager";

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
// updateCurrentProject(0) don't add this back in it will ruin persistance!!!
// Also it's already being called though localStorageInit() 
updateMainHeader() 
populateSideBarBtns()
populateTaskItems()



const handleProjectClick = (e) => {
    const element = e.target

    if (element.hasAttribute('data-project-index')) {
        const value = element.getAttribute('data-project-index')
        updateCurrentProject(value)
        updateMainHeader()
        clearMainTaskList()
        populateTaskItems()

    }
}

document.body.addEventListener('click', handleProjectClick)

const handleTaskDelBtn = (e) => {
    const element = e.target

    if (element.classList.contains('main-del-btn')) {
        const indexString = element.getAttribute('data-task-index')
        const index = parseInt(indexString)
        removeTaskDOM(index) 
    }
}

document.body.addEventListener('click', handleTaskDelBtn) 

// TESTING FUNCTIONS!!

// for testing purposes view clicked project in console
document.body.addEventListener('click', (e) => {
 
    const obj = getCurrentProject()
    // console.log(obj)
    // console.log(`~~ current project ~~\ntitle: ${obj.title}\ndescription: ${obj.description}\nid: ${obj.id}`)
})




