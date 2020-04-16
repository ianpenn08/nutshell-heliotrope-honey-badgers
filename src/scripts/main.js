import { getEvents } from "./events/eventProvider.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"
import { renderLogin, loginEvent, renderRegister } from "./register/welcome.js";
import { getSavedUsers } from "./register/usersDataProvider.js";
import "./register/existingUserLoginButton.js";
import "./register/registerNewUserButton.js";

getSavedUsers().then(renderLogin).then(loginEvent).then(renderRegister)

getSavedUsers()
    .then(getEvents)
    .then(EventForm)
    .then(EventList)