
require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const indexRouter = require("./routes/index");

const app = express();

app.use("/", indexRouter);

app.listen(port, () => {
    console.log("app is listening");
});

