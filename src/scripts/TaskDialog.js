// Author: Blake Slochowsky
export const TaskDialog = () => {

const contentTarget = document.querySelector(".container")

contentTarget.addEventListener("click", event => {
    if (event.target.id.startsWith("addTask--")) {
        const theDialog = document.querySelector(".dialog--form")
        theDialog.showModal()
    }
    if (event.target.id === "closeDialog") {
        const dialogElement = document.querySelector(".dialog--form")
        dialogElement.close()
    }
})
}