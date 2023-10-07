export function taskBox(id, title, description, dueDate) {
    const taskBody = document.createElement('div')

    taskBody.setAttribute("data-task-index", id)

    // creates body
    taskBody.classList.add('main-task-item')

    //create wrapper for body btns
    const btnWrapper = document.createElement('div')
    btnWrapper.classList.add('main-task-line-wrapper')
    taskBody.appendChild(btnWrapper) 

    // create edit btn
    const editBtn = document.createElement('div')
    editBtn.innerText = 'edit'
    editBtn.classList.add('main-edit-btn')
    editBtn.setAttribute("data-task-index", id)
    
     // create del btn
    const delBtn = document.createElement('div')
    delBtn.innerText = 'del'
    delBtn.classList.add('main-del-btn')
    delBtn.setAttribute("data-task-index", id) 

    btnWrapper.appendChild(editBtn)
    btnWrapper.appendChild(delBtn)

     // main title
    const mainTitle = document.createElement('p')
    mainTitle.classList.add('main-task-title')
    mainTitle.setAttribute('id', `task-title-${id}`)
    mainTitle.innerText = title
    taskBody.appendChild(mainTitle)

    // duetext
    const duetext = document.createElement('p')
    duetext.innerText = `due date: ${dueDate}`
    duetext.setAttribute('id', `task-date-${id}`) 
    taskBody.appendChild(duetext)

    // description
    const descText = document.createElement('p')
    descText.innerText = description
    descText.setAttribute('id', `task-desc-${id}`)
    taskBody.appendChild(descText) 

    const container = document.querySelector('#task-list')

    container.appendChild(taskBody)
  }

