//Authored by Billy Blackman
//The purpose of this module is to display events stored in the database

import { useEvents } from "./eventProvider.js"
import { Event } from "./EventHTML.js"
import { useUsers } from "../register/usersDataProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".eventsContainer")

//Function to display events

export const EventList = () => {
    
    //Render is invoked after the user has logged in
        
        eventHub.addEventListener('userChosen', (event) => {
            render()
        })
}

//State change listener

eventHub.addEventListener("eventStateChanged", customEvent => {
    render()
})


const render = () => {
    
    const allTheUsers = useUsers()
    const theSessionUser = sessionStorage.getItem("activeUser")
    const theActiveUserId = parseInt(theSessionUser)
    const theActiveUser = allTheUsers.find(user => theActiveUserId === user.id)
    const allTheEvents = useEvents()
    const theMatchingEvents = allTheEvents.filter( event => theActiveUser.id === event.userId)
    const theSortedMatchingEvents = theMatchingEvents.sort((a, b) => a.dateTimeStamp - b.dateTimeStamp)
    
    
    contentTarget.innerHTML = theSortedMatchingEvents.map( eventObject => {
        
        return Event(eventObject) 
    })
    .join(`<br>`)
}


//Render is invoked when the user list has been updated
eventHub.addEventListener('userStateChanged', () => render())