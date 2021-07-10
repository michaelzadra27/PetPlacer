console.log("my body is ready")

const switchBtn = document.getElementById("switch")


const switchMenu = async (event) => {
    event.preventDefault()
    console.log("switch hit")
    const response = await fetch('/api/users/switch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log(response)
        location.reload()
    } else {
      alert(response.statusText);
    }
  };

  switchBtn.addEventListener("click", switchMenu)
