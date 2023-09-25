const projectManager = {
  projectId: 0,
  objects: [],
  currentId: null,
  currentProject: null
}

export const addProjectData = (project) => {
  projectManager.objects.push(project);
  increaseProjectIdCount()
};

export const removeProjectData = (projectid) => {
  const index = projectManager.objects.indexOf(projectid);
  if (index !== -1) {
    projectManager.objects.splice(index, 1); 
  }
};

export const getAllProjectsData = () => {
  return projectManager.objects; 
};

export const getNewProjectId = () => {
  return projectManager.projectId; 
};

const increaseProjectIdCount = () => {
  projectManager.projectId++
};

export const getCurrentSelectedProjectId = () => {
  return projectManager.currentId
}

export const updateCurrentProjectId = (id) => {
  projectManager.currentId = id
};




