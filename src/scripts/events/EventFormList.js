//Authored by Billy Blackman
//The purpose of this module is to display the new event form

import { EventForm } from "./EventForm.js"

const contentTarget = document.querySelector(".eventFormContainer")

export const EventFormList = () => {

        contentTarget.innerHTML = EventForm()

    }
