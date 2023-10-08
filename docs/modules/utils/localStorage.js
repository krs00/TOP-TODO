import { projectFactory } from "/modules/utils/projectFactory";
import { updateCurrentProject } from "/modules/utils/projectManager";

// These methods are for initializing localStorage!!

export function localStorageInit() {

    initProjectsArray() 
    initTasksArray()
    initCurrentProject()
}


function initProjectsArray() {
    const projectsArray = localStorage.getItem("projectsArray")

    if (projectsArray === null) {

         // adds initial "All tasks project into projects array"
        const array = []
        const initialProject = projectFactory(0, 'All Tasks', 'All of your tasks!')
        array.push(initialProject)

        localStorage.setItem("projectsArray", JSON.stringify(array));
    }
}



function initTasksArray() {

    const tasksArray = localStorage.getItem("tasksArray")

    if (tasksArray === null) {
        localStorage.setItem("tasksArray", JSON.stringify([]));
    }

}


function initCurrentProject() {

    const currentProject = localStorage.getItem("currentProject")

    // check if there is a current project selected
    // select default "All tasks" if none all selected
    if (currentProject === null) {
        updateCurrentProject(0)
    }
}