// Author: Ian Penn
// Purpose: Uses newsProvider for imformation and makes its functional on the browser by returning the info in html representation


import { useArticles, deleteArticle } from "./newsProvider.js"
import { Article } from "./NewsArticleHTML.js"
import { useUsers } from "../register/usersDataProvider.js"

const contentTarget = document.querySelector(".newsArticleContainer")
const eventHub = document.querySelector("#container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [_, articleId] = clickEvent.target.id.split("--")
        deleteArticle(articleId)
        dispatchStateChangeEvent()
    }
})

eventHub.addEventListener("articleStateChanged", customEvent => {
    render()
})
eventHub.addEventListener('userChosen', (event) => {
	contentTarget.classList.remove("hidden")
  })

const render = () => {
    const allTheUsers = useUsers()
    const theActiveUserId = parseInt(sessionStorage.activeUser)
    const theActiveUser = allTheUsers.find(user => theActiveUserId === user.id)
    const articles = useArticles()
    const allTheArticles = articles.sort((a, b) => a.timestamp - b.timestamp)
    const theMatchingArticles = allTheArticles.filter( article => theActiveUser.id === article.userId)
    const theSortedMatchingArticles = theMatchingArticles.sort((a, b) => a.dateTimeStamp - b.dateTimeStamp)
        contentTarget.innerHTML = theSortedMatchingArticles.map(
            (currentArticleObject) => {
            
                return Article(currentArticleObject)
            }
        ).join("")

    }

    eventHub.addEventListener('userChosen', (event) => {
        render()
    })


export const ArticlesList = () => {
    
    render()
}

export default ArticlesList