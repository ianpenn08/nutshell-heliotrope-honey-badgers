//Authored by Billy Blackman
//The purpose of this module is to display events stored in the database

import { useEvents } from "./eventProvider.js"
import { Event } from "./EventHTML.js"
import { useUsers } from "../register/usersDataProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".eventsContainer")

//Function to display events

export const EventList = () => {

    const allTheUsers = useUsers()
    const theActiveUserId = parseInt(sessionStorage.activeUser)
    const theActiveUser = allTheUsers.find(user => theActiveUserId === user.id)
    const allTheEvents = useEvents()
    const theMatchingEvents = allTheEvents.filter( event => theActiveUser.id === event.userId)

    const render = () => {
        contentTarget.innerHTML = theMatchingEvents.map( eventObject => {
            
            return Event(eventObject) 
        })
        .join(`<br>`)
    }
    render()
}

//State change listener

eventHub.addEventListener("eventStateChanged", customEvent => {
    EventList()
})


// contentTarget.innerHTML = allTheEvents.map( eventObject => {

//     return Event(eventObject)
// })
// .join(`<br>`)