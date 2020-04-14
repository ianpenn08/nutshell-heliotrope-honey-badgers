//Authored by Billy Blackman
//The purpose of this module is to display events stored in the database

import { useEvents } from "./eventProvider.js"
import { Event } from "./EventHTML.js"

//Function to display events

const contentTarget = document.querySelector(".eventsContainer")

export const EventList = () => {

    const allTheEvents = useEvents()

    const render = () => {

        contentTarget.innerHTML = allTheEvents.map( eventObject => {

            return Event(eventObject)
        })
        .join(`<br>`)
    }
    render()
}