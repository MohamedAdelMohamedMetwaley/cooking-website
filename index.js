import express from "express"
import bodyParser from "body-parser"
import axios from "axios";

const app = express();
const port = 3000;
const apiURL = "https://api.spoonacular.com"
const apikey = "?apiKey=7a390b2a08f54376bfb7bafc98c8c5e9";
var randImgs = [];
var browseImgs = [];

app.use(express.static("./public/"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs", {
      images: randImgs,
    })
})

app.get("/browse", async (req, res) => {    
    res.render("./browse.ejs", {
      browseImages: browseImgs
    })
})

app.get("/favourites", (req, res) => {
  res.render("favourites.ejs")
})

// Listen method
app.listen(port, async (req, res) => {
    try {
        const result = await axios.get(randImagesURL(6, "main course,side dish,lunch, main dish"))
        const result2 = await axios.get(randImagesURL(99, ""));
        randImgs = result.data.recipes;
        browseImgs = result2.data.recipes;
      } catch (error) {
        console.log("Error getting random: ", JSON.stringify(error.message));
      }
    console.log("Server listening on port ", port)
})

function randImagesURL(number, tags){
  return `${apiURL}/recipes/random${apikey}&number=${number}&tags=${tags}`
}
 