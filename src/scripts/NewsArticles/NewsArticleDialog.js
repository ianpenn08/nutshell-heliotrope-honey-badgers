import { newArticle } from "./NewsArticleForm.js"
import { useArticles } from "./newsProvider.js"

const contentTarget = document.querySelector(".newArticle__button")
const eventHub = document.querySelector("#container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newArticles") {
        
        const customEvent = new CustomEvent("newArticleButtonClicked")

        eventHub.dispatchEvent(customEvent)
    }
})

const render = () => {
        const allTheArticles = useArticles()

        contentTarget.innerHTML = allTheArticles.map(
            currentArticleObject => {

                return newArticle(currentArticleObject)
            }
        ).join("")
    }

    export const newerArticle = () => {
        render()
    }
    
    export default newerArticle

export const NewArticleButton = () => {
    contentTarget.innerHTML = "<button id='newArticles'>New Article</button>"
}