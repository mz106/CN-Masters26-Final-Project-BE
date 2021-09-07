
require("dotenv").config();
const express = require("express");

const connection = require("./db");
const port = process.env.PORT || 5000;

const User = require("./models/user");
const Test = require("./models/test");

const testRouter = require("./routes/test");
const indexRouter = require("./routes/index");
const productRouter = require("./routes/products");
const errorRouter = require("./routes/error");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());

app.use("/test", testRouter);
app.use("/products", productRouter);
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("*", errorRouter);


app.listen(port, async () => {
    console.log("app is listening");
    // connection.authenticate();
    await Test.sync({alter: true}); // This creates/updates tables
    console.log("HTTP Server Started");
});

