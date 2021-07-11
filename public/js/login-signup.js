console.log("my body is ready")

const switchBtn = document.getElementById("switch")


const switchMenu = async (event) => {
    event.preventDefault()
    const response = await fetch('/api/users/switch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        location.reload()
    } else {
      alert(response.statusText);
    }
  };

  switchBtn.addEventListener("click", switchMenu)
