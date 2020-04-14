import { useUsers } from './userProvider.js'
import { useMessages, saveNewMessage } from './messageProvider.js'
import { NewMessageFormHTML } from './NewMessageFormHTML.js'
import { MessageHTML } from './MessageHTML.js'

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.messagesContainer')

export const MessageList = () => {
  render()
}

const render = () => {
  const users = useUsers()
  const messages = useMessages()

  contentTarget.innerHTML = `

  ${users
    .map((user) => {
      const foundMessage = messages.find(
        (message) => message.userId === user.id
      )
      return MessageHTML(foundMessage, user)
    })
    .join('')}

  ${NewMessageFormHTML()}
  `
}

eventHub.addEventListener('sendMessageButtonClicked', (event) => {
  if ('message' in event.detail) {
    const newMessage = {
      userId: sessionStorage.activeUser,
      message: event.detail.message,
    }
    saveNewMessage(newMessage)
  }
})

eventHub.addEventListener('messageStateChanged', () => {
  render()
})
