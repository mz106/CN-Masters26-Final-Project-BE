
require("dotenv").config();
const express = require("express");

const connection = require("./db");
const port = process.env.PORT;

const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");

const app = express();

app.use("/", indexRouter);
app.use("*", errorRouter);

app.listen(port, () => {
    console.log("app is listening");
});

