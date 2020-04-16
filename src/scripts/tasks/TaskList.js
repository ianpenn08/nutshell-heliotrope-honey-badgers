// Author: Blake Slochowsky
// Purpose: list all of the un completed tasks
import { useTasks, deleteTask, getTasks, saveTask, updateTask } from "./TaskProvider.js"
import { TaskComponent } from "./TaskHTML.js"
import { TaskForm } from "./TaskForm.js"

const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector("#container")
const addButtonTarget = document.querySelector(".addTaskButtonContainer")


eventHub.addEventListener("click", deleteClickEvent => {
    if (deleteClickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = deleteClickEvent.target.id.split("--")

        deleteTask(id).then(() => render(getTasks()))
    }
})


eventHub.addEventListener("addTaskButtonClicked", event => {
    const newTask = {
        task: event.detail.task,
        userId: parseInt(sessionStorage.getItem("activeUser")),
        completed: event.detail.completed,
        completionDate: event.detail.completionDate
    }
    saveTask(newTask)
})

eventHub.addEventListener('userChosen', (event) => {
    addButtonTarget.innerHTML = `
    <button id="addTask--">Add Task </button>`
    contentTarget.classList.remove("hidden")
    render()
})

  eventHub.addEventListener("newUser", (event) => {
    addButtonTarget.innerHTML = `
    <button id="addTask--">Add Task </button>`
    contentTarget.classList.remove("hidden")
})

    
const render = () => {
    const currentUserId = sessionStorage.getItem("activeUser")
    const tasks = useTasks()
    const filteredUserTasks = tasks.filter(userTask => userTask.userId === parseInt(currentUserId));
    contentTarget.innerHTML = `
        ${filteredUserTasks.map(task => {
        if (task.completed !== true) {
            return TaskComponent(task, filteredUserTasks)
        }
    }
    ).join("")}`
    TaskForm()
}




contentTarget.addEventListener("click", event => {
    if (event.target.id.startsWith("checkbox--")) {
        const [prefix, taskId] = event.target.id.split("--")
        const tasks = useTasks()
        const userTask = tasks.find(task => task.id === parseInt(taskId))
        const taskName = userTask.task
        let completed = true
        const completedDate = userTask.completionDate
        const newTask = {
            id: taskId,
            task: taskName,
            userId: parseInt(sessionStorage.getItem("activeUser")),
            completed: completed,
            completionDate: completedDate
        }
        updateTask(newTask)
    }
})


eventHub.addEventListener("taskStateEventChanged", event => {
    render()
})



export const TaskList = () => {
    eventHub.addEventListener("userChosen", (event) => {
        render()
    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id === 'saveTask') {
        const taskName = document.querySelector("#task-name").value
        const completionDate = document.querySelector("#task-date").value
        const completed = false
        const TaskEvent = new CustomEvent("addTaskButtonClicked", {
            detail: {
                task: taskName,
                userId: parseInt(sessionStorage.getItem("activeUser")),
                completed: completed,
                completionDate: completionDate
            }
        })
        eventHub.dispatchEvent(TaskEvent)
    }
})