console.log("Dashboard")

const searchBtn = document.getElementById('searchBtn')
const likeBtn = document.getElementById('btnYes')
let dogID = document.querySelector('dogID')
let dogName = document.querySelector('#pup').value
let dogPhoto = document.querySelector('.dogPhoto').getAttribute('src')
console.log(dogPhoto)

const searchUser = async (event)=> {

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

const addAccountLink = async (event) =>{
    const email = document.querySelector('.linkEmail').innerHTML
    console.log(email)
    console.log("hit")
    event.preventDefault()
    const addLink = await fetch('/api/users/link_account', {
        method: 'PUT',
        body: JSON.stringify({email}),
        headers: { 'Content-Type': 'application/json' }
    })
    if(addLink){location.reload()}
    
}

const makeList = (user)=>{
    const foundList = document.getElementById('foundUsers')
    const li = document.createElement('LI')
    const p = document.createElement("P")
    p.setAttribute('CLASS', 'linkEmail')
    const Btn = document.createElement('BUTTON')
    Btn.setAttribute('ID', 'link')

    Btn.addEventListener('click', addAccountLink)
  
    Btn.textContent = "Link"




    foundList.appendChild(li)
    li.appendChild(p)
    p.textContent = user.email
    li.appendChild(Btn)
}

const getMatches = async (event)=>{
    //event.preventDefault()
    const matches = await fetch('/api/users/matches')
    const array = await matches.json()
    console.log(array)
    console.log('match')
}

const addLike = async (event)=>{
    event.preventDefault()
    console.log("saving data")
    const add = await fetch('/api/users/addLike', {
        method: 'PUT',
        body: JSON.stringify({like: dogID, name: dogName, img: dogPhoto}),
        headers: { 'Content-Type': 'application/json' }
    })
    const added = await add
    if(added){
        getMatches()
    }
    else{return}
}


getMatches();

searchBtn.addEventListener('click', searchUser)
likeBtn.addEventListener('click', addLike)




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


