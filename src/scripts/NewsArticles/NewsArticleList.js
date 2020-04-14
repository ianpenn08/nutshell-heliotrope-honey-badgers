import { getArticles, useArticles, deleteArticle } from "./newsProvider.js"
import { Article } from "./NewsArticleHTML.js"

const contentTarget = document.querySelector(".newsArticles")
const eventHub = document.querySelector("#container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [_, articleId] = clickEvent.target.id.split("--")
        deleteArticle(articleId)
    }
})

eventHub.addEventListener("articleStateChanged", customEvent => {
    render()
})


const render = () => {

    getArticles().then(() => {
        const allTheArticles = useArticles()

        contentTarget.innerHTML = allTheArticles.map(
            currentArticleObject => {

                return Article(currentArticleObject)
            }
        ).join("")
    })
}

export const ArticlesList = () => {
    render()
}

export default ArticlesList