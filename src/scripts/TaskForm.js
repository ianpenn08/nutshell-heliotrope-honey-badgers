// Author: Blake Slochowsky
// Purpose: Represent the HTML of the form, grab the value of the input boxes and implement the saveTask
// custom event that dispatches the event to the eventHub.
const contentTarget = document.querySelector(".taskForm")

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