const logOutBtn = document.getElementById('logOutBtn')

const logout = async (event) => {
    event.preventDefault()
    console.log("logout hit")
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  logOutBtn.addEventListener('click', logout);