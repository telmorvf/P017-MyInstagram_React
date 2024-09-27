// imports
const express = require("express")
const router = express()

router.use("/api/users", require("./UserRoutes"))


// test route api
router.get("/", (req, res) =>{
  res.send("The API test is Working!")
})

// exports
module.exports = router