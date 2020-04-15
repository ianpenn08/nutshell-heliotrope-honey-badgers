import ArticlesList from "./NewsArticles/NewsArticleList.js";
import { getArticles } from "./NewsArticles/newsProvider.js";
import { newArticle } from "./NewsArticles/NewsArticleForm.js";




getArticles()
.then(newArticle)
.then(ArticlesList)



