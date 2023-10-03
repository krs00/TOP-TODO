const projectManager = {
  currentProject: null
};

export const getProjectsArray = () => {
  const projectsArray = localStorage.getItem("projectsArray")
  return projectsArray 
};

export const saveProjectsArray = (array) => {

  localStorage.setItem("projectsArray", JSON.stringify(array));
};

export const addNewProject = (obj) => {
  const projectsArray = getProjectsArray()
  projectsArray.push(obj);
  saveProjectsArray(projectsArray) 
};

export const removeProject = (id) => {
  const projectsArray = getProjectsArray()

  const newArray = projectsArray.filter(item => item.id !== id);

  saveProjectsArray(newArray)

};

export const getNewProjectId = () => {
  const projectsArray = getProjectsArray()

  const lastProject = projectsArray[projectsArray.length - 1];

  const newId = lastProject.id + 1

  return newId
};

// WIP WIP WIP WIP WIP WIP
export const updateProjectInfo = (id, title, desc) => {

  const array = projectManager.projectArray

  for (let i = 0; i < array.length; i++) {

    const project = array[i]

    if (project.id === id) {

      project.title = title
      project.description = desc
    }
  }
}

export const updateCurrentProject = (id) => {
  const array = projectManager.projectArray

  for (let i = 0; i < array.length; i++) {

    if (array[i].id == id) {

      projectManager.currentProject = array[i]
    }
  }
}

export const getCurrentProject = () => {
  return projectManager.currentProject
}

export const getCurrentProjectId = () => {
  return projectManager.currentProject.id
}
