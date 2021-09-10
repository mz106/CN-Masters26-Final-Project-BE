require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connection } = require("./db");
const port = process.env.PORT || 5000;

const User = require("./models/user");
const Test = require("./models/test");
const Products = require("./models/product");

const adminRouter = require("./routes/admin");
const testRouter = require("./routes/test");
const indexRouter = require("./routes/index");
const productRouter = require("./routes/products");
const errorRouter = require("./routes/error");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use("/", indexRouter);
app.use("/test", testRouter);
app.use("/products", productRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("*", errorRouter);

app.listen(port, async () => {
  console.log("app is listening");
  connection.authenticate();
  await Test.sync({ alter: true }); // This creates/updates tables
  await Products.sync({ alter: true }); // This creates/updates tables
  console.log("HTTP Server Started");
});
