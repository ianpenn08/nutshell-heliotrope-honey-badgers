// Author: Traye Johson

import { loginFormHTML } from "./existingUserLoginForm.js";
import { getSavedUsers } from "./usersDataProvider.js";

const eventHub = document.querySelector('#container');

export const renderLogin = () => {
  eventHub.innerHTML = loginFormHTML;
  
  const allUsers = getSavedUsers()

  eventHub.addEventListener('userChosen', (event) => {
    if (event.detail.user === allUsers && event.detail.userPassword) {
    
      
    }
  })
};