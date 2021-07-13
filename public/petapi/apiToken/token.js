// const petFinderKey = "3m8nwrVMxrsMJ4n6XvooyVdxjqVRqKMLiiIrR036M3ynyptSbR"
// const petFinderSecret = "vT3chXJ3ddzDrpStykKDftVGJ55X1nCGDXPOJJNN"
// console.log("before token")

// const getToken = async () => {
//     console.log("token function")
//     const params = new URLSearchParams();
//     params.append("grant_type", "client_credentials");
//     params.append("client_id", petFinderKey);
//     params.append("client_secret", petFinderSecret);
//     const petfinderRes = await fetch(
//       "https://api.petfinder.com/v2/oauth2/token",
//       {
//         method: "POST",
//         body: params,
//       }
//     );
//     const data = await petfinderRes.json();
//      console.log(petfinderRes)

//     //res.send(data);
//     console.log("+++++++")
//     console.log(data)
//     console.log("DDDDDDDDD")
//     console.log(data.access_token)
//     return data.access_token
//    };

// getToken();

// module.exports = {getToken}
