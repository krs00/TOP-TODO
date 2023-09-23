const projectManager = {
  projectIdAssign: 0,
  objects: []
}

export const addProjectData = (project) => {
  projectManager.objects.push(project);
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

export const getProjectsId = () => {
  return projectManager.objects; 
}; 