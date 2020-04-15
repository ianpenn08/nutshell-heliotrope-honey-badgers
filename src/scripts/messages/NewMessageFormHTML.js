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
