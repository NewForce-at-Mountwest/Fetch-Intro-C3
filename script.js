//https://api.openbrewerydb.org/breweries           http://localhost:8088/food

// fetch("https://api.openbrewerydb.org/breweries")
// .then(breweries => breweries.json())
// .then(parsedBrewriesArray => {

//     console.table(parsedBrewriesArray)

//     console.log("this is the console.log", parsedBrewriesArray)

// })

// search?entity_id=37217&q=mexican

// city id : 1138

fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=mexican", {
    headers: {
        "user-key": "ac8ce1c0bab66fafebad3e4d78ef9643",
    }
}) //go rob the bank
  .then((dirtyMoney) => dirtyMoney.json()) //cleaning the money
  .then(function (parsedFoods) {
    console.log(parsedFoods);
    // Select the container where we want to print
    // const foodContainer = document.querySelector(".foodList")

    // // Loop through the foods when they come back from the API
    // parsedFoods.forEach(singleFood => {
    //     // For each food in the array, print it to the DOM
    //     foodContainer.innerHTML += `
    //     <div>
    //         <h4>${singleFood.name}</h4>
    //         <p>${singleFood.category}</p>
    //         <p>${singleFood.ethnicity}</p>
    //     </div>`
  });

  fetch(`zomato.com&apiKey=${zomatoAPIKey}`)
  .then(r => r.json())
  .then(r => console.log(r))

