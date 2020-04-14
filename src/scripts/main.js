import ArticlesList from "./NewsArticles/NewsArticleList";
import { getArticles } from "./NewsArticles/newsProvider";





getArticles()
.then(ArticlesList)