import { newProjectComponent } from "./modules/projectComponent"



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

  newProjectComponent(projectName)
 
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

