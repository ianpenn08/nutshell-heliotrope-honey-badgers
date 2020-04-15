// Author: Blake Slochowsky
export const TaskComponent = tasks => {
    console.log("Indivudual OBJECT", tasks)
    return `
      <section id="taskCard">
        <div class="taskCardInfo">
        <li id="taskName--${tasks.id}">Task: ${tasks.task}</li>
        <li id="dateToComplete--${tasks.id}">Date: ${tasks.completionDate}</li>
        <li>Completed Task?
        <input type="checkbox" id="checkbox--${tasks.id}">
        </li>
        </div>
          <button id="deleteTask--${tasks.id}">Delete Task</button>
      </section>`
}