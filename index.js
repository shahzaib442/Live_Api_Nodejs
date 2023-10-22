const express = require('express');
require("./db")
require('dotenv').config();
const app = express();

const PORT = 3000

app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', require("./Routes/Auth/AuthRoutes"))

app.use('/', (request, response) => {
    response.send("Welcome to Live API");
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})