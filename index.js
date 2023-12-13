import express from "express"
import bodyParser from "body-parser"
import axios from "axios";

const app = express();
const port = 3000;
const apiURL = "https://api.spoonacular.com/"
const apikey = "?apiKey=7a390b2a08f54376bfb7bafc98c8c5e9";
var randImgs = [];

app.use(express.static("./public/"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    
    res.render("index.ejs", {
      image1: randImgs[0],
      image2: randImgs[1],
      image3: randImgs[2]
      
    })
})

// Listen method
app.listen(port, async (req, res) => {
    try {
        const result = await axios.get(`${apiURL}recipes/random${apikey}&number=3`,apikey);
        randImgs = result.data.recipes;
      } catch (error) {
        console.log("Error: ", JSON.stringify(error.message));
      }
    console.log("Server listening on port ", port)
})