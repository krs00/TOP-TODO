import { projectFactory } from "./modules/utils/projectFactory"
import { addNewProject, getNewProjectId, getProjectArray } from "./modules/utils/projectManager"
import { projectBox } from "./modules/components/projectBox"

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

  console.log(projectName)
  console.log(projectDescription)

  const newId = getNewProjectId()

  const newProject = projectFactory(newId, projectName, projectDescription)
  projectBox(newId, projectName)
  addNewProject(newProject) 


  console.log(getProjectArray())

  clearProjectModalInputs()
  closeProjectModal() 

}

// PROJECT MODAL FUNCTIONS END













