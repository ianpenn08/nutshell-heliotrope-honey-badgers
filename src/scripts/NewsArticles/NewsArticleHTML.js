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
            <a href="${articleObject.website}" target="_blank">Article Website</a>
            <p>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
            </p>
        </section>
        </fieldset>
    `
}