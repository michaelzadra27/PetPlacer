console.log("in signUp")

const createAccountHandler = async (event) => {
    event.preventDefault()
    const newUserName = document.getElementById('userName').value.trim()
    const newEmail = document.getElementById('email').value.trim()
    const newPassword = document.getElementById('password').value.trim()
  
    if (newEmail && newUserName && newPassword){
      const response = await fetch('/api/users/signup',{
        method: 'POST',
        body: JSON.stringify({ newUserName, newEmail, newPassword }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
      console.log(response)
    }
  
  }

  submitBtn.addEventListener("click", createAccountHandler)