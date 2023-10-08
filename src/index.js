import {updateCurrentProject} from "/src/modules/utils/projectManager";
import { openProjectModal, closeProjectModal, submitProjectModal, updateMainHeader, openTaskModal, closeTaskModal, clearMainTaskList, submitTaskModal, populateTaskItems, populateSideBarBtns, removeTaskDOM, openConfirmDelModal, closeConfirmDelModal, submitConfirmDelModal, toggleMenuBtns, openEditProjectModal, openEditTaskModal } from "/src/DOM";
import { localStorageInit} from "/src/modules/utils/localStorage";
import { updateCurrentTaskId } from "/src/modules/utils/taskManager"; 

const addProjectBtn = document.querySelector('#add-project-btn')
const closeProjectBtn = document.querySelector('#close-project-btn')
const submitProjectBtn = document.querySelector('#submit-project-btn')
const editProjectBtn = document.querySelector('#edit-project-btn') 

const addTaskBtn = document.querySelector('#add-task-btn')
const closeTaskBtn = document.querySelector('#close-task-btn')
const submitTaskBtn = document.querySelector('#submit-task-btn')

const confirmDelBtn = document.querySelector('#del-project-btn')
const closeConfirmDelBtn = document.querySelector('#close-confirm-btn') 
const submitConfirmDel = document.querySelector('#submit-confirm-btn')

addTaskBtn.addEventListener('click', openTaskModal)
closeTaskBtn.addEventListener('click', closeTaskModal)
submitTaskBtn.addEventListener('click', submitTaskModal)

addProjectBtn.addEventListener('click', openProjectModal)
closeProjectBtn.addEventListener('click', closeProjectModal)
submitProjectBtn.addEventListener('click', submitProjectModal)
editProjectBtn.addEventListener('click', openEditProjectModal) 

confirmDelBtn.addEventListener('click', openConfirmDelModal)
closeConfirmDelBtn.addEventListener('click', closeConfirmDelModal)
submitConfirmDel.addEventListener('click', submitConfirmDelModal)

console.log('hi')
console.log('hi')
console.log('hi')

// Initializes storage
// Initializes page
localStorageInit() 
updateMainHeader()
toggleMenuBtns()
populateSideBarBtns()
populateTaskItems()

const handleProjectClick = (e) => {
    const element = e.target

    if (element.hasAttribute('data-project-index')) {
        const value = element.getAttribute('data-project-index')
        updateCurrentProject(value)
        toggleMenuBtns() 
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

//

const handleTaskEditBtn = (e) => {
    const element = e.target

    if (element.classList.contains('main-edit-btn')) {
        const indexString = element.getAttribute('data-task-index')
        const index = parseInt(indexString)
        updateCurrentTaskId(index) 
        openEditTaskModal(index) 
}
}


document.body.addEventListener('click', handleTaskEditBtn)  
