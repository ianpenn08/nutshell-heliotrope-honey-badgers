import ArticlesList from "./NewsArticles/NewsArticleList.js";
import { getArticles } from "./NewsArticles/newsProvider.js";
import { newArticle } from "./NewsArticles/NewsArticleForm.js";
import { renderLogin, loginEvent, renderRegister } from "./register/welcome.js";
import { getSavedUsers } from "./register/usersDataProvider.js";
import "./register/existingUserLoginButton.js";
import "./register/registerNewUserButton.js";
import { getTasks } from "./TaskProvider.js"
import { TaskList } from "./TaskList.js"
import { TaskForm } from "./TaskForm.js"
import { TaskDialog } from "./TaskDialog.js"
import { getMessages } from './messages/messageProvider.js'
import { MessageList } from './messages/MessageList.js'
import { renderLogin, loginEvent, renderRegister } from './register/welcome.js'
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
  .then(getMessages)
  .then(MessageList)
  .then(getTasks)
  .then(TaskList)
  .then(TaskForm)
  .then(TaskDialog)
  .then(getArticles)
  .then(newArticle)
  .then(ArticlesList)