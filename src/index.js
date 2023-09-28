import { projectFactory } from "./modules/utils/projectFactory";
import { getProjectArray, addNewProject, removeProject, updateProjectInfo, updateCurrentProject, getCurrentProject } from "./modules/utils/projectManager";

import { taskFactory } from "./modules/utils/taskFactory";
import { getTaskArray, addNewTask, removeTask, updateTaskInfo } from "./modules/utils/taskManager";

import { openProjectModal, closeProjectModal, submitProjectModal } from "./DOM";

const addProjectBtn = document.querySelector('#add-project-btn')
const closeProjectBtn = document.querySelector('#close-project-btn')
const submitProjectBtn = document.querySelector('#submit-project-btn')

addProjectBtn.addEventListener('click', openProjectModal)
closeProjectBtn.addEventListener('click', closeProjectModal)
submitProjectBtn.addEventListener('click', submitProjectModal)






