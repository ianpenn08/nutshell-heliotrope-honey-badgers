import { useTasks, deleteTask, getTasks } from "./TaskProvider.js"
import { TaskComponent } from "./TaskHTML.js"
import { TaskForm } from "./TaskForm.js"

const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")
const addButtonTarget = document.querySelector(".addTaskButtonContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        
        deleteTask(id).then(() => render(getTasks()))
    }
})

addButtonTarget.innerHTML = `
<button id="addTask--">Add Task</button>
`

const render = () => { 
    getTasks().then(() => {
    const tasks = useTasks()
    console.log("Tasks ARRAY", tasks)
        contentTarget.innerHTML = `
        ${tasks.map(task => {
            return TaskComponent(task)
        }
        ).join("")}
        ${TaskForm()}
        `
    })
}
    render()
    

export const TaskList = () =>{
    render()
}