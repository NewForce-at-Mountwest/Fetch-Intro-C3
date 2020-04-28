             //https://api.openbrewerydb.org/breweries           http://localhost:8088/food

// fetch("https://api.openbrewerydb.org/breweries")
// .then(breweries => breweries.json())
// .then(parsedBrewriesArray => {

//     console.table(parsedBrewriesArray)

//     console.log("this is the console.log", parsedBrewriesArray)

// })


let globallyScoped;

fetch("http://localhost:8088/food")                     //go rob the bank
.then(dirtyMoney => dirtyMoney.json())                //cleaning the money
.then(function(cleanMoneyArray){

    ///All code using database response must go here

    // console.log(cleanMoneyArray[0].name)
    // console.log(cleanMoneyArray[1].name)


    // for(let i=0; i < cleanMoneyArray.length; i++){
    //     console.log(cleanMoneyArray[i].name)
    // }

    globallyScoped = cleanMoneyArray;  // won't work

    cleanMoneyArray.forEach(singleItem => {
            console.log(singleItem.name)
    });


})

console.log(globallyScoped)    // Won't work



