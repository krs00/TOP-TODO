import { openProjectModal, closeProjectModal, submitProjectModal} from "./DOM";
import { getAllProjectsData, getCurrentSelectedProjectId, updateCurrentProjectId,} from "./modules/projectManager";

const addProjectBtn = document.querySelector('#add-project-btn')
const closeProjectBtn = document.querySelector('#close-project-btn')
const submitProjectBtn = document.querySelector('#submit-project-btn')

// HANDLES PROJECT MODAL POPUP ACTIONS
addProjectBtn.addEventListener('click', openProjectModal)
closeProjectBtn.addEventListener('click', closeProjectModal)
submitProjectBtn.addEventListener('click', submitProjectModal)

// GETS CURRENTLY SELECTED PROJECT ID AND OBJECT
document.body.addEventListener('click', (e) => {
    const element = e.target
    if (element.hasAttribute('data-project-id')) {
        const id = element.getAttribute('data-project-id')
        updateCurrentProjectId(id)
        
    }
})




// FOR TESTING PURPOSES
document.body.addEventListener('click', () => {console.log(getAllProjectsData())})

document.body.addEventListener('click', () => {console.log(`current selected project is ${getCurrentSelectedProjectId()}`)})