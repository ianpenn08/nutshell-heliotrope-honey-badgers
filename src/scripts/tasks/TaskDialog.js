// Author: Blake Slochowsky
// Purpose: the purpose is this file is opening and closing of the dialog when the addTask button is clicked. 
export const TaskDialog = () => {

const contentTarget = document.querySelector("#container")

contentTarget.addEventListener("click", event => {
    if (event.target.id.startsWith("addTask--")) {
        const theDialog = document.querySelector(".dialog--form")
        theDialog.showModal()
    }
    if (event.target.id === "closeDialog" || event.target.id === ("saveTask")) {
        const dialogElement = document.querySelector(".dialog--form")
        dialogElement.close()
    }
})
}