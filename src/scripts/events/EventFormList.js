//Authored by Billy Blackman
//The purpose of this module is to display the new event form

import { EventForm } from "./EventForm"

const contentTarget = document.querySelector(".eventFormContainer")

//Function to display event form

export const EventFormList = () => {

        contentTarget.innerHTML = EventForm()

    }
