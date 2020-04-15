// Author: Blake Slochowsky
// Purpose: listen for the delete button event.
// listnen for the addtaskbuttonclicked event and create a new object, then invoke the save task and pass in the newtask objet in as an argument
// inside of the render fnction itterate over the array of tasks but before I return the HTML rep. of the task object
// I make a condition so that it only returns the task whos completed value is set to false. if the value is true then it will ot display it.
// I also make the event that listens for the click on the checkbox so that when a task is clicked 
// it finds the FK ID of the task that was clicked matches it with the PK id of the task so it knows which one was completed, then changes that completed value to true causing the task to be hidden.
// also made a new object that would represent a task completed, then call the updateTask fetch and pass in the new object as an argument that will render our new list of 
// tasks while taking the task that was selected and hiding it.
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


addButtonTarget.innerHTML = `
<button id="addTask--">Add Task</button>`


eventHub.addEventListener("taskCreated", click => {
    const updatedTask = useTasks()
    render(updatedTask)
})


const render = () => {
    getTasks().then(() => {
        const tasks = useTasks()
        contentTarget.innerHTML = `
        ${tasks.map(task => {
            if (task.completed !== true) {
                return TaskComponent(task)
            }
        }
        ).join("")}`
        TaskForm()
    })
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
            userId: 2,
            completed: completed,
            completionDate: completedDate
        }
        updateTask(newTask)
    }
})


eventHub.addEventListener("taskStateEventChanged", event => {
    TaskList()
})


export const TaskList = () => {
    const tasks = useTasks()
    render(tasks)
}