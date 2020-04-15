import { newArticle } from "./NewsArticleForm"



const contentTarget = document.querySelector(".newsArticleForm")



export const articleDialog = () => {

        contentTarget.innerHTML = newArticle()

    }