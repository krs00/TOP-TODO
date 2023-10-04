import { projectFactory } from "./projectFactory";
import { updateCurrentProject } from "./projectManager";

// These methods are for saving / storing in local storage :)

export function localStorageInit() {

    const projectsArray = localStorage.getItem("projectsArray")
    const currentProject = localStorage.getItem("currentProject")
    const tasksArray = localStorage.getItem("tasksArray")

    if (projectsArray === null) {

         // adds initial "All tasks project into projects array"
        const array = []
        const initialProject = projectFactory(0, 'All Tasks', 'All of your tasks!')
        array.push(initialProject)

        localStorage.setItem("projectsArray", JSON.stringify(array));
    }

    if (tasksArray === null) {
        localStorage.setItem("tasksArray", JSON.stringify([]));
    }

    // check if there is a current project selected
    if (currentProject === null) {
        updateCurrentProject(0)
    }

}