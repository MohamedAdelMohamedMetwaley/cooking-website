import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("./public/"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

// Listen method
app.listen(port, (req, res) => {
    console.log("Server listening on port ", port)
})