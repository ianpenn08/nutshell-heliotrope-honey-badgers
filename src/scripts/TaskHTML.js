export const TaskComponent = tasks => {
    console.log("??", tasks)
    return `
      <section id="taskCard">
        <div class="taskCardInfo">
            <li>${tasks.task}</li>
        <li class="taskCardInfo">Date: ${tasks.completionDate}
        </li>
        <li>
          Task Completed: <input id="hideTask--${tasks.id}" class="hideTask" type="checkbox">
        </div>
          <button id="deleteTask--${tasks.id}" class="btn btn-secondary">Delete Task</button>
          </button>
      </section>
            `
  }