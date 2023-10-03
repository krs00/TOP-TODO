import { projectFactory } from "./projectFactory";

// These methods are for saving / storing in local storage :)

export function localStorageInit() {

    const projectsArray = localStorage.getItem("projectsArray")
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
}