import express from "express";
import compression from "compression";
import index from "./routes/index";
import path from "path";

import { products } from "./data";
const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());
console.log(__dirname);
app.use(express.static(__dirname + "/public"));

// if (process.env.NODE_ENV === "development") {
//   app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
// }

app.post("/api/products", (req, res) => {
  return res.send(products);
});

//Routes
app.use("/", index);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Tinh Ha welcome you at port ${port}`);
  console.log("env", process.env.NODE_ENV);
});
