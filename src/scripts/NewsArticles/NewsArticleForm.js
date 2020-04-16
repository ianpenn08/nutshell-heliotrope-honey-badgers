// Author: Ian Penn
// Purpose: create a dialog with save and back button and html reprsenation of new article



import { saveArticle } from "./newsProvider.js"

const contentTarget = document.querySelector(".newsArticleForm")

export const newArticle = () => {
    contentTarget.innerHTML = `
    <button type="button" id="newArticleButton">New Article</button>
   <dialog id="newArticleForm">
            <h2>New Article</h2>
        <fieldset class="newArticle">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
        </fieldset>
        <fieldset class="newArticle">
            <label for="synopsis">Synopsis</label>
            <textarea name="" id="synopsis" cols="15" rows="5"></textarea>
        </fieldset>
        <fieldset class="newArticle">
            <label for="website">Website</label>
            <input type="url" name="website" id="website">
        </fieldset>
        <button type="submit" id="articleSaveButton">Save Article</button>
        <button type="button" id="backButton">Back</button>
       </dialog>
       
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "articleSaveButton") {

        const title = document.querySelector("#title").value
        const synopsis = document.querySelector("#synopsis").value
        const website = document.querySelector("#website").value

    
    const createArticle = {
            userId: parseInt(sessionStorage.activeUser),
            title: title,
            synopsis: synopsis,
            website: website
        }

        saveArticle(createArticle)
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newArticleButton") {
        const newArticleForm = document.querySelector("#newArticleForm")
        newArticleForm.showModal()
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "backButton" || clickEvent.target.id === "articleSaveButton" ) {
        const newArticleForm = document.querySelector("#newArticleForm")
        newArticleForm.close()
    }
})