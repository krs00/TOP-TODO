import { openProjectModal, closeProjectModal, submitProjectModal } from "./DOM";
import { getAllProjectsData } from "./modules/projectManager";

const addProjectBtn = document.querySelector('#add-project-btn')
const closeProjectBtn = document.querySelector('#close-project-btn')
const submitProjectBtn = document.querySelector('#submit-project-btn')

addProjectBtn.addEventListener('click', openProjectModal)
closeProjectBtn.addEventListener('click', closeProjectModal)
submitProjectBtn.addEventListener('click', submitProjectModal)


document.body.addEventListener('click', () => {console.log(getAllProjectsData())})