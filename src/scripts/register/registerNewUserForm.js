// Author: Traye Johson

export const registerFormHTML = `
<article class='registerContainer'>
  <h1 class='registerTitle'>Register Form</h1>
  <section class='registerForm'>
    <form>
      <label for="registerUserName">User name:</label>
      <input type="text" id="registerUserName" name="registerUserName">
      <label for="registerPassword1">Enter Password:</label>
      <input type="text" id="registerPassword1" name="registerPassword1">
      <label for="registerPassword2">Enter Password Again:</label>
      <input type="text" id="registerPassword2" name="registerPassword2">
      <label for="registerEmail">Enter Email Address:</label>
      <input type="text" id="registerEmail" name="registerEmail">
    </form>
    <button id='registerUserButton'>register</button>
    <button id='backButton'>Back to login</button>
  </section>  
</article>
`