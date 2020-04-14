export const MessageHTML = (messageObject, userObject) => {
  return `
  <section class="message">
    <div class="username">${userObject.username}</div>
    <div class="message">${messageObject.message}</div>
  </section>
  `
}
