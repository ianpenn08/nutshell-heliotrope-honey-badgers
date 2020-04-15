// Author: Traye Johson

import { loginFormHTML } from "./existingUserLoginForm.js";
import { getSavedUsers } from "./usersDataProvider.js";

const eventHub = document.querySelector('#container');

export const renderLogin = () => {
  eventHub.innerHTML = loginFormHTML;
  
  const allUsers = getSavedUsers()

  eventHub.addEventListener('userChosen', (event) => {
    const foundUser = allUsers.find(user => user.userName === event.detail.user)
    
    console.log(foundUser)

    if(foundUser !== null) {
      if(foundUser.password === event.detail.password){
        
      }
    }
  })
};