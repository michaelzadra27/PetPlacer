console.log("Dashboard")

const searchBtn = document.getElementById('searchBtn')
const likeBtn = document.getElementById('btnYes')
let dogID = document.querySelector('dogID')
let dogName = document.querySelector('#pup').value
let dogPhoto = document.querySelector('.dogPhoto').getAttribute('src')
console.log(dogPhoto)

const searchUser = async (event) => {

    event.preventDefault()
    const userEmail = document.getElementById('userEmail').value.trim()
    fetch(`/api/users/search/${userEmail}`)
        .then(function (response) {
            if (response.status !== 200) {
                if (response.status === 404) {
                    alert("No user found with that email")
                } else {
                    alert("error." + response.status);
                }
            }
            return response.json();
        })
        .then(function (data) {
            if (!data.email) {
                return
            }
            makeList(data)
        });
}

const addAccountLink = async (event) => {
    const email = document.querySelector('.linkEmail').innerHTML
    console.log(email)
    console.log("hit")
    event.preventDefault()
    const addLink = await fetch('/api/users/link_account', {
        method: 'PUT',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (addLink) { location.reload() }

}

const makeList = (user) => {
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

const getMatches = async (event) => {
    //event.preventDefault()
    const matches = await fetch('/api/users/matches')
    const array = await matches.json()
    array.forEach(dog => {
        let ul = document.querySelector(".matchList")
        console.log(dog)
        console.log(dog.img)
        const newLi = document.createElement("LI")


        const img = document.createElement("IMG")
        img.src = dog.img
        img.setAttribute("class", "card-img-top matchImg")
        img.id = "tester"
        img.src = 'images/bulldog.jpg'
        img.alt = "DOG IMAGES GO HERE"

        const name = document.createElement("P")
        name.textContent = dog.name
        name.class = "card-text matchName"

        const viewMatchBtn = document.createElement("BUTTON")
        viewMatchBtn.type = "button"
        viewMatchBtn.setAttribute("class", "btn btn-primary")
        viewMatchBtn.setAttribute("data-bs-toggle", "modal")
        viewMatchBtn.setAttribute("data-bs-target", "#matchModal")
        //viewMatchBtn.setAttribute("dogNum", dog.like)

        viewMatchBtn.addEventListener("click", (event) => {
            viewMatchBtn.setAttribute("dogNum", dog.like)
            event.preventDefault()
            console.log('click')
            document.querySelector("#dogModalInfo").textContent = dog.like

            dogAPI = dog.like
            getData2(dogAPI);
        })


        ul.appendChild(newLi)
        ul.appendChild(img)
        ul.appendChild(name)
        ul.appendChild(viewMatchBtn)

        //NEW CARD API CALL
        function getData2(dogAPI) {

            const getToken = async () => {
                console.log("token function")
                const params = new URLSearchParams();
                params.append("grant_type", "client_credentials");
                params.append("client_id", key);
                params.append("client_secret", secret);
                const petRes = await fetch(
                    "https://api.petfinder.com/v2/oauth2/token",
                    {
                        method: "POST",
                        body: params,
                    }
                );
                const data = await petRes.json();

                console.log("+++++++")
                console.log(data)
                console.log("DDDDDDDDD")
                console.log(data.access_token)
                CardApi(data.access_token, dogAPI)
            };

            getToken();

            function CardApi(access_token, dogAPI) {
                fetch(
                    `https://api.petfinder.com/v2/animals/${dogAPI}`,
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                )
                    .then(function (response) {
                        console.log(response)
                        return response.json();


                    })
                    .then(function (data2) {
                        console.log(data2)

                        dogNameModal = data2.animal.name
                        city = data2.animal.contact.address.city
                        state = data2.animal.contact.address.state
                        pic = data2.animal.photos[0].medium
                        

                        dogNameEl = document.getElementById("dogNameModal")
                        dogInfoEl = document.getElementById("dogInfoModal")
                        dogPicE1 = document.getElementById("dogPicModal")
                        dogUrlE1 = document.getElementById("dogModalURL")

                        dogNameEl.textContent = dogNameModal
                        dogInfoEl.textContent = `${"Location: " + city + ","} ${state}`
                        dogPicE1.setAttribute("src", pic)
                        
                        




                        //renderCards(data2);


                    })

            };

        }





    })

}

const addLike = async (event) => {
    event.preventDefault()
    console.log("saving data")
    const add = await fetch('/api/users/addLike', {
        method: 'PUT',
        body: JSON.stringify({ like: dogID, name: dogName, img: dogPhoto }),
        headers: { 'Content-Type': 'application/json' }
    })
    const added = await add
    if (added) {
        getMatches()
    }
    else { return }
}


getMatches();

searchBtn.addEventListener('click', searchUser)
likeBtn.addEventListener('click', addLike)







