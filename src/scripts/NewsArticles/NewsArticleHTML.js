// Author: Ian Penn
// Purpose: HTML representation of articles



export const Article = (articleObject) => {
    return `
    <fieldset>
        <section class="article">
            <header>
                <h2>${articleObject.title}</h2>
            </header>
            <p>${articleObject.synopsis}</p>
            <p>${articleObject.website}</p>
            <p>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
            </p>
        </section>
        </fieldset>
    `
}