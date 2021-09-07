
require("dotenv").config();
const express = require("express");

const connection = require("./db");
const port = process.env.PORT;

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const app = express();

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(port, () => {
    console.log("app is listening");
});

