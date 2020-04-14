import { getActiveUser, getUsers } from './messages/userProvider.js'
import { getMessages } from './messages/messageProvider.js'
import { MessageList } from './messages/MessageList.js'

getUsers().then(getActiveUser).then(getMessages).then(MessageList)
