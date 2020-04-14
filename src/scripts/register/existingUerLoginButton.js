const eventHub = document.querySelector('container');

eventHub.addEventListener("click", clickEvent => {

  if (clickEvent.target.id.startsWith("loginButton")) {
    const loginUserName = document.querySelector('loginUserName').value
    const loginUserPassword = document.querySelector('loginUserPassword').value
    /*
        Create a new custom event, with a good name, and
        add a property to the `detail` object that specifies
        which itinerary was chosen
    */
    const userChosenEvent = new CustomEvent("userChosen", {
        detail: {
          user: loginUserName,
          userPassword: loginUserPassword
        }
    })

    eventHub.dispatchEvent(userChosenEvent)
  }
})