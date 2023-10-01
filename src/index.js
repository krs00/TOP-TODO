import { projectFactory } from "./modules/utils/projectFactory";
import { getProjectArray, addNewProject, removeProject, updateProjectInfo, updateCurrentProject, getCurrentProject } from "./modules/utils/projectManager";

import { taskFactory } from "./modules/utils/taskFactory";
import { getTaskArray, addNewTask, removeTask, updateTaskInfo } from "./modules/utils/taskManager";

import { openProjectModal, closeProjectModal, submitProjectModal, updateMainHeader, openTaskModal, closeTaskModal, clearMainTaskList, submitTaskModal } from "./DOM";

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

// Adds all tasks default object to project array
const initialAllTasks = projectFactory(0, 'All Tasks', 'All of your tasks!')
addNewProject(initialAllTasks)

updateCurrentProject(0)


const handleProjectClick = (e) => {
    const element = e.target

    if (element.hasAttribute('data-project-index')) {
        const value = element.getAttribute('data-project-index')
        updateCurrentProject(value)
        const currentProject = getCurrentProject()
        updateMainHeader(currentProject)
        clearMainTaskList()

    }
}


// TESTING FUNCTIONS!!

document.body.addEventListener('click', handleProjectClick) 

// for testing purposes view clicked project in console
document.body.addEventListener('click', (e) => {

    const obj = getCurrentProject()
    console.log(`~~ current project ~~\ntitle: ${obj.title}\ndescription: ${obj.description}\nid: ${obj.id}`)

})








