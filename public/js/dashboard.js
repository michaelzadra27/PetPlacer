console.log("Dashboard")


const linkBtn = document.getElementById('linkAcctBtn')
const searchBtn = document.getElementById('searchBtn')

const searchUser = async (event)=> {
    event.preventDefault()
    fetch(`https://ow-api.com/v1/stats/pc/us/${user}/complete`)
    .then(function (response) {
      if (response.status !== 200) {
        alert("error." + response.status);
        location.reload()
      } else {
      }
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    });
}



searchBtn.addEventListener('click', searchUser)


// const searchUser = async (event)=> {
//     event.preventDefault()
//     const userEmail = document.getElementById('userEmail').value.trim()

//     const userFound = await fetch(`/api/users/search/${userEmail}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//     if(userFound){
//         console.log(userFound)
//         console.log(JSON.stringify(userFound))
//     }
//     else{console.log("no user found")}
// }
