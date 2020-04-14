// Author: Traye Johson

export const registerFormHTML = `
<article class='registerContainer'>
  <title class='registerTitle'>Login</title>/Register</title>
  <section class='registerForm'>
    <form>
      <label for="registerUserName">Email/User name:</label>
      <input type="text" id="registerUserName" name="registerUserName">
      <label for="registerPassword1">Enter Password:</label>
      <input type="text" id="registerPassword1" name="registerPassword1">
      <label for="registerPassword2">Enter Password Again:</label>
      <input type="text" id="registerPassword2" name="registerPassword2">
    </form>
    <button class='registerButton'>register</button>
    <button class='backButton'>Back to login</button>
  </section>  
</article>
`