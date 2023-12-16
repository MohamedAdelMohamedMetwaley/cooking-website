document.querySelectorAll("#fav-icon").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const newFav = event.target;
        const newFavParent = newFav.parentNode;
        if(newFavParent.className !== "favouritesImg"){
            console.log("in")
            addToFav(newFav.id, newFavParent.className)
            alert("Added to Favourites")
            newFavParent.className = "favouritesImg";
        } else alert("Already added this recipe to favourites")
})
})

function addToFav(elementID, imgClass){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/addFav", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        newFavID: elementID,
        newFavClass: imgClass
    }))
}