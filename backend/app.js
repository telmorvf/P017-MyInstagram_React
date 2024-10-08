require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")


//const port = 5000
const port = process.env.PORT
const app = express();


// config JSON and form data message response
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))


// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))



// DB connection
require("./config/db.js");


//routes
const router = require("./routes/Router")


app.use(router)

app.listen(port, () => {
  console.log(`Telmo = App running on port: ${port}`)
})