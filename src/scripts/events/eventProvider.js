//Authored by Billy Blackman

/** The purpose of this component is to:
 * 
 * - Provide access to the events in the database
 * - To export functions to add, edit and delete events
 * - To broadcast a custom event to interested modules indicating that the database has been updated
 *  */ 

const eventHub = document.querySelector("#container")

let events = []

export const useEvents = () => events.slice()

export const getEvents = () => fetch("http://localhost:8088/events")
	.then(response => response.json())
    .then(data => events = data)
    
//Function to save a new event

export const saveEvent = event => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

//Function to delete an event

export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

//Event state change event

export const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventStateChangedEvent)
}