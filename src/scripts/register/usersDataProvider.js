// Author: Traye Johson
let users = []

const eventHub = document.querySelector('#container')

const dispatchStateChangeEvent = () => {
  const userStateChangeEvent = new CustomEvent('userStateChanged')
  eventHub.dispatchEvent(userStateChangeEvent)
}

export const getSavedUsers = () => {
  return fetch('http://localhost:8088/users')
    //taking what was recieved(promise) and turning it into java
    .then(response => response.json())
    //taking that java and storing it then putting it in eateries
    .then(parsedUsers => {
        users = parsedUsers
  })
}

export const saveUser = user => {
  return fetch('http://localhost:8088/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    //convert object into string that reps object w/ json.stringify
    body: JSON.stringify(user)
    })
    .then(getSavedUsers)
    //lets other components know something changed
    .then(dispatchStateChangeEvent)
}

export const deleteUser = userId => {
  return fetch(`http://localhost:8088/user/${userId}`, {
    method: "DELETE"
  })
  .then(getSavedUsers)
  .then(dispatchStateChangeEvent)
}

export const getActiveUser = (userId) =>
  fetch(`http://localhost:8088/users/${userId}`)
    .then((res) => res.json())
    .then((parsedUser) => {
      activeUser = parsedUser.id
      sessionStorage.setItem('activeUser', activeUser)
})


export const useUsers = () => users.slice()