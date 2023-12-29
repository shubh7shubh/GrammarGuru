const express = require("express");
const connectDb = require("./config/connectDb");
const app = express();
const dotenv = require("dotenv").config()

connectDb()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`)
})

