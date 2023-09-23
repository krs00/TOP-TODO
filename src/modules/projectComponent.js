export function newProjectComponent(id, projectName) {

  const container = document.querySelector('#sidebar-wrapper')
  const button = document.createElement('button')
  button.innerText = `${projectName}`
  button.setAttribute('data-project-id', id)
  container.appendChild(button) 


}