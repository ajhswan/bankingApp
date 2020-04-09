const express = require('express');
const bodyParser = require('body-parser');
const Port = 6000;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const app = express();





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})