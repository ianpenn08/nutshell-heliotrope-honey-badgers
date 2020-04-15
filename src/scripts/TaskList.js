import { useTasks, deleteTask, getTasks, saveTask, updateTask } from "./TaskProvider.js"
import { TaskComponent } from "./TaskHTML.js"
import { TaskForm } from "./TaskForm.js"

const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")
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
        userId: 1,
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
        console.log("Tasks ARRAY", tasks)
        contentTarget.innerHTML = `
        ${tasks.map(task => {
            if (task.completed !== true) {
                return TaskComponent(task)
            }
        }
        ).join("")}
        ${TaskForm()}
        `
    })
}
render()


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