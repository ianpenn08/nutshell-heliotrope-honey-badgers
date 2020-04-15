// Author: Blake Slochowsky
// Purpose: Provide all the fetch calls that grab the data from our JSON server(API).
// Also dispatch a custom event that when invoked will re render the task list using .then.
const eventHub = document.querySelector("#container")

let tasks = []

export const useTasks = () => tasks.slice()

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(parsedTasks => {
            tasks = parsedTasks.sort(
                (currentTask, nextTask) =>
                    Date.parse(currentTask.completionDate) -
                    Date.parse(nextTask.completionDate)
            )
        })
}

export const dispatchEventStateChange = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateEventChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)
}

export const saveTask = task => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(getTasks)
        .then(dispatchEventStateChange)
}

export const updateTask = (task) => {
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(getTasks)
        .then(dispatchEventStateChange)
}

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
}

