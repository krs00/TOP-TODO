export function newProjectComponent(id, projectName) {

  const container = document.querySelector('#new-projects-container')
  const button = document.createElement('button')
  button.innerText = `${projectName}`
  // button.classList.add('')
  button.setAttribute('data-project-id', id)
  container.appendChild(button) 


}