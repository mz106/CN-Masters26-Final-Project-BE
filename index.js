
require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

app.use("/", (req, res) => {
    res.status(200).send("Hello world");
});

app.listen(port, () => {
    console.log("app is listening");
});

