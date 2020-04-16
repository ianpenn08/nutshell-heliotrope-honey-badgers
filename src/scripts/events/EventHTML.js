//Authored by Billy Blackman
//The purpose of this component is to represent one event object with HTML

import { deleteEvent, dispatchStateChangeEvent } from "./eventProvider.js"

const contentTarget = document.querySelector(".eventsContainer")
const eventHub = document.querySelector("#container")

export const Event = (eventObject) => {
	return `
		<section class=“event”>
			<fieldset>
				<h2>${eventObject.name}</h2>
				<div>${eventObject.date}</div>
				<div>${eventObject.location}</div>
				<button id="deleteEvent--${eventObject.id}">Delete Event</button>
			</fieldset>
		</section>
	`	
}

//Delete note event

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [notUsing, eventId] = clickEvent.target.id.split("--")
		deleteEvent(eventId)
		dispatchStateChangeEvent()
    }
})

eventHub.addEventListener('userChosen', (event) => {
	contentTarget.classList.remove("hidden")
  })