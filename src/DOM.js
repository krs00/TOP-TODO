import { newProjectComponent } from "./modules/projectComponent"
import { newProject } from "./modules/newProject"
import { addProjectData, getNewProjectId } from "./modules/projectManager"



export function openProjectModal() {
  openOverlay()
  openProjectPopup()
}

export function closeProjectModal() {
  closeOverlay()
  clearPopupInputs()
  closeProjectPopup()
}

export function submitProjectModal() {
  const projectName = document.querySelector('#project-name-input').value
  const projectDescription = document.querySelector('#project-description-input').value

  createNewProject(projectName, projectDescription)

  closeProjectModal()

}

// UTILITY DOM FUNCTIONS

function openProjectPopup() {
  const popup = document.querySelector('#add-project-modal')
  popup.style.display = "block"
}

function closeProjectPopup() {
  const popup = document.querySelector('#add-project-modal')
  popup.style.display = "none"
}

function openOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = "block"
}

function closeOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = "none"
}

function clearPopupInputs() {
  const popupInputs = document.querySelectorAll('.popup-input-select')
 
  for (let i = 0; i < popupInputs.length; i++) {
    const input = popupInputs[i]
    input.value = ""
  }
}

function createNewProject(projectName, projectDescription) {
  const newproject = newProject(getNewProjectId(), projectName, projectDescription)

  newProjectComponent(getNewProjectId(), projectName)

  addProjectData(newproject)
}

