accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzbThud3JWTXhyc01KNG42WHZvb3lWZHhqcVZScUtNTGlpSXJSMDM2TTN5bnlwdFNiUiIsImp0aSI6ImE0NTNlZDM1ZjQzMzNjY2UxYWQ3ZGNlYjQ5MjNhOWIwMGE1MjhiNDc0MTQwYzU4MzMxODdkZjExNTAzM2E0N2ZmMDE0Zjc0YzAwNThiMzBiIiwiaWF0IjoxNjI2MDQwNzY1LCJuYmYiOjE2MjYwNDA3NjUsImV4cCI6MTYyNjA0NDM2NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.iTFLbCE5W2mbywjbMI5K9Bi50Pe1hoGCVLZzdo2b2vhCDHgII2-pT_gLjYxe1BA4jf-DnNARr4VXOO8UR8hriZizU9s2qmPCwvldQ_ml6dlsSBHEmGaDao25hVTNUIFTFUQOMsa6KAYNC5pB0C3QmoTyIArJGozuUA8A9BVyjBM0MPDbFojVsJG8bCxArNUsRf2BoGXsZfKK7VYyDKWXgGOgGe2_ZowL2KqYNl3npTvnkMnPIyESs6Rb8ZNmxxOvxF6LhZWnItrlbGbePszcoOlw6yf5_GAwprUJflNHBGuDTqKuKTn9S3SzUhqZQw_-YIjHLuSKyxGlJG_CNvxCVw'


function apiCall() {
  fetch(
    "https://api.petfinder.com/v2/animals?type=dog&page=2",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
    .then(function (response) {
      return response.json();


    })
    .then(function (data1) {
      console.log(data1)
    })
};

apiCall();

console.log("I'm ready")