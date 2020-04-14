// Author: Traye Johson

import { loginFormHTML } from "./ExistingUserLoginForm.js";

const eventHub = document.querySelector('container');

export const render = () => eventHub.innerHTML = loginFormHTML;