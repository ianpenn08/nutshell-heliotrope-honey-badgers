import { getActiveUser, getUsers } from './messages/userProvider.js'
import { getMessages } from './messages/messageProvider.js'
import { MessageList } from './messages/MessageList.js'

getUsers().then(getActiveUser).then(getMessages).then(MessageList)
import { renderLogin, loginEvent, renderRegister } from './register/welcome.js'
import { getSavedUsers } from './register/usersDataProvider.js'
import './register/existingUserLoginButton.js'
import './register/registerNewUserButton.js'

getSavedUsers().then(renderLogin).then(loginEvent).then(renderRegister)
