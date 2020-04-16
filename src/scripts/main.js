import ArticlesList from "./NewsArticles/NewsArticleList.js";
import { getArticles } from "./NewsArticles/newsProvider.js";
import { newArticle } from "./NewsArticles/NewsArticleForm.js";
import { renderLogin, loginEvent, renderRegister,registerEvent } from "./register/welcome.js";
import { getSavedUsers } from "./register/usersDataProvider.js";
import "./register/existingUserLoginButton.js";
import "./register/registerNewUserButton.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { TaskList } from "./tasks/TaskList.js";
import { TaskForm } from "./tasks/TaskForm.js";
import { TaskDialog } from "./tasks/TaskDialog.js";
import { getEvents } from "./events/eventProvider.js";
import { EventList } from "./events/EventList.js";
import { EventForm } from "./events/EventForm.js";
import { getMessages } from './messages/messageProvider.js';
import { MessageList } from './messages/MessageList.js'

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
  .then(getArticles)
  .then(newArticle)
  .then(ArticlesList)
  .then(getEvents)
  .then(EventForm)
  .then(EventList)

