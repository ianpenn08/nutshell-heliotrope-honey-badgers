// Author: Ian Penn
// Purpose: Uses newsProvider for imformation and makes its functional on the browser by returning the info in html representation


import { useArticles, deleteArticle } from "./newsProvider.js"
import { Article } from "./NewsArticleHTML.js"
import { useUsers } from "../register/usersDataProvider.js"

const contentTarget = document.querySelector(".newsArticleContainer")
const eventHub = document.querySelector("#container")
// const articleContentTarget = document.querySelector(
//     '.newsArticleForm'
//   )

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
    const users = useUsers()
    const articles = useArticles()
    const allTheArticles = articles.sort((a, b) => a.timestamp - b.timestamp)
        contentTarget.innerHTML = allTheArticles.map(
            (currentArticleObject) => {
                let foundUser = users.find((user) => user.id === currentArticleObject.userId)

                return Article(currentArticleObject, foundUser)
            }
        ).join("")

    }


export const ArticlesList = () => {
    render()
}

export default ArticlesList