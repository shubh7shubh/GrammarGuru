const express = require("express")
const app = express();
const dotenv = require("dotenv").config()


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`)
})

