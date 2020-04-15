import ArticlesList from "./NewsArticles/NewsArticleList.js";
import { getArticles } from "./NewsArticles/newsProvider.js";
import { newArticle } from "./NewsArticles/NewsArticleForm.js";
import { renderLogin, loginEvent, renderRegister } from "./register/welcome.js";
import { getSavedUsers } from "./register/usersDataProvider.js";
import "./register/existingUserLoginButton.js";
import "./register/registerNewUserButton.js";

getSavedUsers().then(renderLogin).then(loginEvent).then(renderRegister)

getArticles()
.then(newArticle)
.then(ArticlesList)



