document.querySelector("[type='text']").addEventListener("keypress", async (event) => {
    var typedWord = event.target.value+event.key;
    getSuggestions(typedWord);
})

document.addEventListener("keydown", async (event) => {
    var typedWord = event.target.value;
    if(event.key === 'Backspace')
        getSuggestions(typedWord.slice(0, typedWord.length-1));
})

function getSuggestions(typedWord){
    if(typedWord.length > 1)
        try {
        console.log(typedWord)
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=7a390b2a08f54376bfb7bafc98c8c5e9&query=${typedWord}&number=5&language=en&metaInformation=false`)
            .then((res) => res.json())
            .then((res) => {
                var listItems = "";
                for(i = 0; i < res.length; i++){
                    listItems += `<a href="" class="list-group-item list-group-item-action">${res[i].name}</a>`
                }
                document.querySelector(".list-group").innerHTML = listItems;
            })
    } catch (error) {
        console.log("Error: ", JSON.stringify(error.message));
    }
    else 
        document.querySelector(".list-group").innerHTML = "";

}