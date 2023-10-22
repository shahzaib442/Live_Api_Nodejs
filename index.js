const express = require('express');
require("./db")
require('dotenv').config();
const app = express();

const PORT = 3000

app.get('/', (request, response) => {
    response.send("Welcome to Live API");
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})