export const Article = (articleObject) => {
    return `
        <section class="note">
            <header>
                <h2>${article.Title}</h2>
            </header>
            <p>${articleObject.synopsis}</p>
            <p>${articleObject.url}</p>
            <p>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
            </p>
        </section>
    `
}