import { renderLogin, loginEvent, renderRegister } from "./register/welcome.js";
import { getSavedUsers } from "./register/usersDataProvider.js";
import "./register/existingUserLoginButton.js";
import "./register/registerNewUserButton.js";

getSavedUsers().then(renderLogin).then(loginEvent).then(renderRegister)