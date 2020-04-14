let tasks = [];

export const useTasks = () => tasks.slice();

export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
    .then(res => res.json())
    .then(parsedTasks => {
      tasks = parsedTasks
    })
}

export const deleteTask = taskId =>{
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then(getTasks)
  }