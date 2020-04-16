import { getMessages } from './messages/messageProvider.js'
import { MessageList } from './messages/MessageList.js'
import { renderLogin, loginEvent, renderRegister, registerEvent} from "./register/welcome.js";
import { getSavedUsers } from './register/usersDataProvider.js'
import './register/existingUserLoginButton.js'
import './register/registerNewUserButton.js'
import { getTasks } from './TaskProvider.js'
import { TaskList } from './TaskList.js'
import { TaskForm } from './TaskForm.js'
import { TaskDialog } from './TaskDialog.js'

getSavedUsers()
  .then(renderLogin)
  .then(loginEvent)
  .then(renderRegister)
  .then(registerEvent)
  .then(getMessages)
  .then(MessageList)
  .then(getTasks)
  .then(TaskList)
  .then(TaskForm)
  .then(TaskDialog)
