//author: Alexander Curnow
/**
 * This module contains the logic for generating an HTML string for the
 * new message input form along with the send message button. This module
 * also sends out the appropriate custom event to let the system know that
 * the send button was clicked, and sends along the associated message (value)
 * from the message input field.
 */

const eventHub = document.querySelector('#container')

export const NewMessageFormHTML = () => {
  return `
  <section class="messageInputContainer__messagingSection">
  <input id="messageInput" placeholder="Message everyone in the 🥜">
  <button id="sendMessageButton">Send</button>
  </section>
  `
}

eventHub.addEventListener('click', (event) => {
  if (event.target.id === 'sendMessageButton') {
    const message = document.querySelector('#messageInput').value
    if (message) {
      const sendButtonClickEvent = new CustomEvent('sendMessageButtonClicked', {
        detail: {
          message: message,
        },
      })
      eventHub.dispatchEvent(sendButtonClickEvent)
    }
  }
})
