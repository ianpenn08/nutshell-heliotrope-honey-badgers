import ArticlesList from "./NewsArticles/NewsArticleList.js";
import { getArticles } from "./NewsArticles/newsProvider.js";
import newerArticle, { NewArticleButton } from "./NewsArticles/NewsArticleDialog.js";



getArticles()
.then(ArticlesList)

NewArticleButton()
.then(newerArticle)

