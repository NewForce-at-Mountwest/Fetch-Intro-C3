             //https://api.openbrewerydb.org/breweries           http://localhost:8088/food

// fetch("https://api.openbrewerydb.org/breweries")
// .then(breweries => breweries.json())
// .then(parsedBrewriesArray => {

//     console.table(parsedBrewriesArray)

//     console.log("this is the console.log", parsedBrewriesArray)

// })



fetch("http://localhost:8088/food")                     //go rob the bank
.then(dirtyMoney => dirtyMoney.json())                //cleaning the money
.then(function(parsedFoods){
    // Select the container where we want to print
    const foodContainer = document.querySelector(".foodList")

    // Loop through the foods when they come back from the API
    parsedFoods.forEach(singleFood => {
        // For each food in the array, print it to the DOM
        foodContainer.innerHTML += `
        <div>
            <h4>${singleFood.name}</h4>
            <p>${singleFood.category}</p>
            <p>${singleFood.ethnicity}</p>
        </div>`
    })
})





