import { getEvents } from "./events/eventProvider.js"
import { EventList } from "./events/EventList.js"

export const Dashboard = () => {
    getEvents()
        .then(EventList)
}

Dashboard()
