const logOutBtn = document.getElementById('logOutBtn')

const logout = async (evnet) => {
    event.preventDefault()
    console.log("logout hit")
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("===============hit")
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  logOutBtn.addEventListener('click', logout);