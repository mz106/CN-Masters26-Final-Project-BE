
require("dotenv").config();
const express = require("express");

const connection = require("./db");
const port = process.env.PORT;

const indexRouter = require("./routes/index");
const productRouter = require("./routes/products");

const app = express();

app.use("/products", productRouter);
app.use("/", indexRouter);


app.listen(port, () => {
    console.log("app is listening");
});

