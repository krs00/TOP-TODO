export const getProjectsArray = () => {
  const array = localStorage.getItem("projectsArray")
  const projectsArray = JSON.parse(array); 

  return projectsArray 
};

const saveProjectsArray = (array) => {

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


export const updateProjectInfo = (id, title, desc) => {

  const array = getProjectsArray()

  for (let i = 0; i < array.length; i++) {

    const project = array[i]

    if (project.id === id) {

      project.title = title
      project.description = desc
    }  
  }

  saveProjectsArray(array) 
}


export const updateCurrentProject = (id) => {
  const array = getProjectsArray()

  for (let i = 0; i < array.length; i++) {

    const obj = array[i]

    if (obj.id == id) {

      localStorage.setItem("currentProject", JSON.stringify(obj));
    }
  }
}

export const getCurrentProject = () => {
  const currentProject = localStorage.getItem("currentProject")
  return currentProject
}

export const getCurrentProjectId = () => {
  const currentProject = localStorage.getItem("currentProject")
  return currentProject.id
}
