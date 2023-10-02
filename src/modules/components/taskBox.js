export function taskBox(id, projectId, title, description, dueDate) {
    const taskBody = document.createElement('div')

    // creates body
    taskBody.classList.add('main-task-item')

    //create wrapper for body btns
    const btnWrapper = document.createElement('div')
    btnWrapper.classList.add('main-task-line-wrapper') 

    // create edit btn
    const editBtn = document.createElement('div')
    editBtn.classList.add('main-edit-btn')
    
     // create del btn
     const delBtn = document.createElement('div')
     delBtn.classList.add('main-del-btn')  

     btnWrapper.appendChild(editBtn)
     btnWrapper.appendChild(delBtn)

     taskBody.appendChild(btnWrapper)

     // main title
     mainTitle = document.createElement('p')
     mainTitle.classList.add('main-task-title')
     mainTitle.innerText = title
     taskBody.appendChild(mainTitle)

    // duetext
    duetext = document.createElement('p')
    duetext.innerText = `due date: ${dueDate}`
    taskBody.appendChild(duetext)

    // main title
    descText = document.createElement('p')
    descText.innerText = description
    taskBody.appendChild(descText)

    const container = document.querySelector('#task-list')

    container.appendChild(taskBody)
  }

