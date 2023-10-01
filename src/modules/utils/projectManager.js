const projectManager = {
  projectIdCounter: 0,
  projectArray: [],
  currentProject: null
};

export const getProjectArray = () => {
  projectManager.projectArray;
  return projectManager.projectArray; 
};

export const addNewProject = (obj) => {
  projectManager.projectArray.push(obj);
  incrementProjectIdCounter()  
};

export const removeProject = (id) => {
  const array = projectManager.projectArray

  const newArray = array.filter(item => item.id !== id);

  projectManager.projectArray = newArray

};

export const getNewProjectId = () => {
  return projectManager.projectIdCounter
};

const incrementProjectIdCounter = () => {
  projectManager.projectIdCounter ++;
};

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
