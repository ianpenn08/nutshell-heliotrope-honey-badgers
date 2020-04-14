import { getTasks } from "./TaskProvider.js"
import { TaskList } from "./TaskList.js"
import { TaskForm } from "./TaskForm.js"
import { TaskDialog } from "./TaskDialog.js"

getTasks()
    .then(TaskList)
    .then(TaskForm)
    .then(TaskDialog)