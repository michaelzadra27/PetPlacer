console.log("Dashboard")


const linkBtn = document.getElementById('linkAcctBtn')
const searchBtn = document.getElementById('searchBtn')

const searchUser = async (event)=> {
    console.log("hit")
    event.preventDefault()
    const userEmail = document.getElementById('userEmail').value.trim()
    fetch(`/api/users/search/${userEmail}`)
    .then(function (response) {
      if (response.status !== 200) {
          if(response.status === 404){
              alert("No user found with that email")
          } else {
            alert("error." + response.status);
          }
      }
      return response.json();
    })
    .then(function (data) {
        if(!data.email){
            return
        }
            makeList(data)
    });
}

const makeList = (user)=>{
    const foundList = document.getElementById('foundUsers')
    const li = document.createElement('LI')
    const p = document.createElement("P")
    const Btn = document.createElement('BUTTON')

    foundList.appendChild(li)
    li.appendChild(p)
    p.textContent = user.email
    p.appendChild(Btn)
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
