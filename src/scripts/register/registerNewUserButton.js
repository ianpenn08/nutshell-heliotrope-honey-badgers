// Author: Traye Johson

import { saveUser } from "./usersDataProvider.js";

const eventHub = document.querySelector('#container');
const registerTarget = document.querySelector('#register');
const loginTarget = document.querySelector('#login');

eventHub.addEventListener("click", clickEvent => {

  if (clickEvent.target.id === "registerButton") {
    registerTarget.classList.remove('hidden')
    loginTarget.classList.add('hidden')
  }
})


eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === 'registerUserButton') {
    
    const registerUserName = document.querySelector('#registerUserName').value
    const registerUserPassword1 = document.querySelector('#registerPassword1').value
    const registerUserPassword2 = document.querySelector('#registerPassword2').value
    const registerEmail = document.querySelector('#registerEmail').value
  
    if(registerUserName !== '' && registerEmail !== '' && registerUserPassword1 !== '' && registerUserPassword2 !== '') {
      if(registerUserPassword1 === registerUserPassword2) {
        const tempUser = {
          "username": registerUserName,
          "email": registerEmail,
          "password": registerUserPassword1
        }

        saveUser(tempUser)

        const newUserEvent = new CustomEvent("newUser", {
            detail: {
              registerUser: registerUserName,
              registerPassword: registerUserPassword1,
              registerPassword: registerEmail
  
            }
          })
          
        eventHub.dispatchEvent(newUserEvent)
  
      }
      
    }
  }
})