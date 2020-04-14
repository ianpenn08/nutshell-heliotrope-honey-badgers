import { getEvents } from "./events/eventProvider.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"

export const Dashboard = () => {
    getEvents()
        .then(EventForm)
        .then(EventList)
}

Dashboard()
