const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/urlshortener");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const routes = require("./routes");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
