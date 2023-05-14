const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
        result: parseInt(a) + parseInt(b)
    });
});

app.listen(2000, () => {
    console.log("Server is running on port 2000")
});

