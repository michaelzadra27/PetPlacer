var animalCard = document.getElementById('animal')
var pup = document.getElementById('pup')
var cardHeaderEl = document.getElementById("cardHeader")
var cardBodyEl = document.getElementById("tester")


const key = "3m8nwrVMxrsMJ4n6XvooyVdxjqVRqKMLiiIrR036M3ynyptSbR"
const secret = "vT3chXJ3ddzDrpStykKDftVGJ55X1nCGDXPOJJNN"
//console.log("before token")

function getData() {

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
    apiCall(data.access_token)
  };

  getToken();


  function apiCall(access_token) {
    fetch(
      "https://api.petfinder.com/v2/animals?type=dog&page=2&size=small&status=adoptable&breed=beagle&gender=male&age=baby",
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
      .then(function (data1) {
        console.log(data1)
        renderCards(data1);
        

      })
  };

 
}

getData();

//Rendering API data to DOM
function renderCards(data1) {

  var i = Math.floor(Math.random() * data1.animals.length)
  console.log(i)
  dogID = data1.animals[i].id
  console.log(dogID)
  photo = data1.animals[i].photos[0].large
  console.log(photo)
  dogName = data1.animals[i].name
  console.log(dogName)
  console.log(data1.animals.length)

  animalCard.setAttribute("dogID", `${dogID}`)
  animalCard.src = photo
  pup.innerHTML = dogName
}

//Calling API when like or dislike is clicked
document.getElementById('btnYes').addEventListener("click", getData)
document.getElementById('btnNo').addEventListener("click", getData)
