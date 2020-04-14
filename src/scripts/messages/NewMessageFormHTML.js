const eventHub = document.querySelector('#container')

export const NewMessageFormHTML = () => {
  return `
  <section>
  <input id="message" placeholder="Message everyone in the 🥜">
  <button id="sendMessageButton">Send</button>
  </section>
  `
}

eventHub.addEventListener('click', (event) => {
  if (event.target.id === 'sendMessageButton') {
    const message = document.querySelector('#message').value
    const sendButtonClickEvent = new CustomEvent('sendMessageButtonClicked', {
      detail: {
        message: message,
      },
    })
    eventHub.dispatchEvent(sendButtonClickEvent)
  }
})
