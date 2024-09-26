// imports
const express = require("express")
const router = express()

// test route api
router.get("/", (req, res) =>{
  res.send("The API test is Working!")
})

// exports
module.exports = router