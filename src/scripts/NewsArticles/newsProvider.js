// Author: Ian Penn
// Purpose: fetch calls from api to save,delete, or get articles


let articles = []

const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
}

export const useArticles = () => articles.sort((c,n) => n.timestamp - c.timestamp).slice()

export const getArticles = () => {
    return fetch('http://localhost:8088/news')
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })
}

export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/news/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
        .then(dispatchStateChangeEvent)
}


export const saveArticle = article => {
    return fetch('http://localhost:8088/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}