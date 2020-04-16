//author: Alexander Curnow
/* This module is responsible for rendering a list of messages, sorted by timestamp, in a 
chatroom style div as well as listening for when the send message button is clicked, and
then saving the sent message to the database and re-rendering the message list to immediately
display the new message. */

import { useUsers } from '../register/usersDataProvider.js'
import { useMessages, saveNewMessage } from './messageProvider.js'
import { NewMessageFormHTML } from './NewMessageFormHTML.js'
import { MessageHTML } from './MessageHTML.js'

const eventHub = document.querySelector('#container')
const messagecontentTarget = document.querySelector('.messagesContainer')
const messageInputContentTarget = document.querySelector(
  '.messageInputContainer'
)

export const MessageList = () => {
  render()
}

const render = () => {
  const users = useUsers()
  const messages = useMessages()
  const sortedMessages = messages.sort((a, b) => a.timestamp - b.timestamp)
  messagecontentTarget.innerHTML = sortedMessages
    .map((message) => {
      let foundUser = users.find((user) => user.id === message.userId)
      return MessageHTML(message, foundUser)
    })
    .join('')

  messageInputContentTarget.innerHTML = NewMessageFormHTML()
}

eventHub.addEventListener('sendMessageButtonClicked', (event) => {
  if ('message' in event.detail) {
    const newMessage = {
      userId: parseInt(sessionStorage.activeUser),
      message: event.detail.message,
      timestamp: new Date().getTime(),
    }
    saveNewMessage(newMessage)
  }
})

eventHub.addEventListener('messageStateChanged', () => {
  render()
  messagecontentTarget.scrollTop = messagecontentTarget.scrollHeight
})
