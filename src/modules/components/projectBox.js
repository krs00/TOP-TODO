export function projectBox(id, projectName) {
  const div = document.createElement('div')

  div.setAttribute("data-project-index", id) 

  div.innerText = projectName

  // div.style.height = '100px'
  // div.style.width = '200px'
  // div.style.backgroundColor = 'red'

  div.classList.add('sidebar-task-btn')

  // div.addEventListener('click', () => {alert("You Clicked!")})

  const container = document.querySelector('#new-projects-container')
  container.appendChild(div)

}