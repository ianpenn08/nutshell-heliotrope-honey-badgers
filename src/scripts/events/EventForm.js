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

//Click event to save event entered into form and then close form

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "eventSaveButton") {

        const name = document.querySelector("#eventName").value
        const date = document.querySelector("#eventDate").value
        const location = document.querySelector("#eventLocation").value
        const newEventForm = document.querySelector("#newEventForm")
        
//Converting event date to time stamp to sort the event list correctly

        let dateArray = date.split("-")

        let dateIntArray = []
        dateArray.forEach(dateString => {
            dateIntArray.push(parseInt(dateString))
            
        })

        
        const dateTimeStamp = Date.UTC(dateIntArray[0], dateIntArray[1], dateIntArray[2])
    
//Creating object with the values of the form fields

    const createEvent = {
            name: name,
            date: date,
            dateTimeStamp: dateTimeStamp,
            location: location
        }

//If statement to check if all form fields are complete and alert user if they are not

        if (name !== "" && date !== "" && location !== "") {
            saveEvent(createEvent)
            newEventForm.close()
        } else alert("Please complete all fields")
    }
})

//Click event to show new event form

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newEventButton") {
        const newEventForm = document.querySelector("#newEventForm")
        newEventForm.showModal()
    }
})

//Click event to close event form dialog with back button

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "backButton") {
        const newEventForm = document.querySelector("#newEventForm")
        newEventForm.close()
    }
})

