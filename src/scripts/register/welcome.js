// Author: Traye Johson

import { loginFormHTML } from "./existingUserLoginForm.js";
import { useUsers } from "./usersDataProvider.js";
import { registerFormHTML } from "./registerNewUserForm.js";

const eventHub = document.querySelector('#container');
const loginTarget = document.querySelector('#login');
const registerTarget = document.querySelector('#register');

export const renderLogin = () => loginTarget.innerHTML = loginFormHTML;
export const renderRegister = () => registerTarget.innerHTML = registerFormHTML;

export const loginEvent = () => {
  const allUsers = useUsers()

  eventHub.addEventListener('userChosen', (event) => {
    const foundUser = allUsers.find(user => user.username === event.detail.user)

    if(foundUser !== null) {
      if(foundUser.password === event.detail.userPassword){
        sessionStorage.setItem('activeUser', foundUser.id)

        loginTarget.classList.add('hidden')
      }
    }
  })
}


export const registerEvent = () => {
  let newUser = {
    registerUsername: '',
    registerUserPassword: ''
  }

  eventHub.addEventListener('newUser', (event) => {
    newUser.registerUsername = event.detail.registerUser
    newUser.registerPassword = event.detail.registerPassword
  })

  eventHub.addEventListener('userStateChanged', (event) => {
    const allNewUsers = useUsers()
  
    const foundNewUser = allNewUsers.find(user => user.username === newUser.registerUsername)
    debugger

    if(foundNewUser !== null) {
      sessionStorage.setItem('activeUser', foundNewUser.id)

      registerTarget.classList.add('hidden')
    }
  })
}