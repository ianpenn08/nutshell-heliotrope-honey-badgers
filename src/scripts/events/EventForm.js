//Authored by Billy Blackman
//The purpose of this module is to represent the new event form in HTML

import { saveEvent } from "./eventProvider.js"

const contentTarget = document.querySelector(".eventsFormContainer")

export const EventForm = () => {
    contentTarget.innerHTML = `
        <button type="button" id="newEventButton">Create new event</button>
        <dialog id="newEventForm">
            <h1>New Event</h1>
            <form class="form" action="">
                <fieldset>
                    <label for="eventDate">Date of event</label>
                    <input type="date" name="eventDate" id="eventDate">
                </fieldset>
            </form>
            <form class="form" action="">
                <fieldset>
                    <label for="eventName">Name of Event</label>
                    <input type="text" name="eventName" id="eventName">
                </fieldset>
            </form>
            <form class="form" action="">
                <fieldset>
                    <label for="eventLocation">Location of event</label>
                    <input type="text" name="eventLocation" id="eventLocation">
                </fieldset>
            </form>
            <button type="submit" id="eventSaveButton">Save event</button>
            <button type="button" id="backButton">Back</button>
        </dialog>
    `
}


//Click event to save event entered into form

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "eventSaveButton") {

        const name = document.querySelector("#eventName").value
        const date = document.querySelector("#eventDate").value
        const location = document.querySelector("#eventLocation").value

    
    const createEvent = {
            name: name,
            date: date,
            location: location
        }

        saveEvent(createEvent)
    }
})

//Click event to show new event form

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newEventButton") {
        const newEventForm = document.querySelector("#newEventForm")
        newEventForm.showModal()
    }
})

//Click event to close event form dialog

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "backButton" || clickEvent.target.id === "eventSaveButton") {
        const newEventForm = document.querySelector("#newEventForm")
        newEventForm.close()
    }
})