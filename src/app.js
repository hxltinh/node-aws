import express from "express";
import compression from "compression";
import index from "./routes/index";
import path from "path";


const app = express();

// View engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());
console.log(__dirname);
app.use(express.static(__dirname + "/public"));

//Routes
app.use("/", index);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Tinh Ha welcome you at port ${port}`);
});
