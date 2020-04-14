export const TaskForm = () => {
    return `
    <section class="taskFormCard">
    <dialog class="dialog--form">
      <fieldset>
        <form class="taskForm">
          <div class="taskFormInfo">
            Task: <input id="task-name" type="text" placeholder="Please enter task.....">
          </div>
          <div class="taskFormInfo">
            Completion Date: <input id="task-date" type="date">
          </div>
        </form>
        <button id="saveTask--">Save Task</button>
        <button id="closeDialog">Close Form</button>
        </fieldset>
        </dialog>
    </section>
    `
}