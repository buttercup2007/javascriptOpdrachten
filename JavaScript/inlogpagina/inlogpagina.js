const users = [
    { username: "admin", password: "wachtwoord123" },
    { username: "user1", password: "mypassword" }
  ];
  

  function handleLogin(event) {
    event.preventDefault();
  
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    errorMessage.textContent = '';
    successMessage.textContent = '';
  
   
    const user = users.find(user => user.username === username && user.password === password);
  

    if (user) {
      successMessage.textContent = `Welkom ${username}! Je bent succesvol ingelogd.`;
    } else {
 
      errorMessage.textContent = 'Onjuiste gebruikersnaam of wachtwoord.';
    }
  }
  
  
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  