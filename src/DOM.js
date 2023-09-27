function openOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = 'block'
}

function closeOverlay() {
  const overlay = document.querySelector('#overlay')
  overlay.style.display = 'none'
}


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











