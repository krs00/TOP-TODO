export function projectBox(id, projectName) {
  const div = document.createElement('div')

  div.setAttribute("data-project-index", id) 

  div.innerText = projectName

  div.classList.add('sidebar-task-btn')

  const container = document.querySelector('#new-projects-container')
  container.appendChild(div)

}