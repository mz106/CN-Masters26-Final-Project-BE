
require("dotenv").config();
const express = require("express");

const connection = require("./db");
const port = process.env.PORT;

const indexRouter = require("./routes/index");
const productRouter = require("./routes/products");

const errorRouter = require("./routes/error");

const userRouter = require("./routes/user");


const app = express();

app.use("/products", productRouter);
app.use("/", indexRouter);


app.use("*", errorRouter);

app.use("/user", userRouter);



app.listen(port, () => {
    console.log("app is listening");
});

