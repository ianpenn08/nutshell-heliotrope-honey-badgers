const eventHub = document.querySelector('#container')

let messages = []

const dispatchStateChangeEvent = () => {
  const messageStateChangeEvent = new CustomEvent('messageStateChanged')
  eventHub.dispatchEvent(messageStateChangeEvent)
}

export const getMessages = () =>
  fetch('http://localhost:8088/messages')
    .then((res) => res.json())
    .then((parsedMessages) => (messages = parsedMessages))

export const useMessages = () => messages.slice()

export const saveNewMessage = (newMessageObject) => {
  return fetch('http://localhost:8088/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessageObject),
  })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}