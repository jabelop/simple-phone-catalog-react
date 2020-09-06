const fs = require('fs');
const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static("public"));

app.get("/phones", (req, res, next) => {
    

    fs.readFile('./data/phones.json', (err, data) => {
        if (err) throw err;
        let phones = JSON.parse(data);
        res.json(phones);
    });
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});