// Author: Blake Slochowsky
const contentTarget = document.querySelector(".taskForm")
const eventHub = document.querySelector("#container")

contentTarget.addEventListener("click", event => {
    const taskName = document.querySelector("#task-name").value
    const completionDate = document.querySelector("#task-date").value
    const completed = false
    if(event.target.id === 'saveTask'){
        const TaskEvent = new CustomEvent("addTaskButtonClicked",{
            detail: {
                task: taskName,
                userId: "",
                completed: completed,
                completionDate: completionDate
            }
        })
        eventHub.dispatchEvent(TaskEvent)
    }
})


export const TaskForm = () => {
    const render = () => {
        contentTarget.innerHTML = `
    <section class="taskFormCard">
    <dialog class="dialog--form">
      <fieldset>
        <form class="taskForm">
          <div>
            Task: <input id="task-name" type="text" placeholder="Please enter task.....">
          </div>
          <div>
            Completion Date: <input id="task-date" type="date">
          </div>
        </form>
        <button id="saveTask">Save Task</button>
        <button id="closeDialog">Close Form</button>
        </fieldset>
        </dialog>
    </section>`
    }
    render()
}