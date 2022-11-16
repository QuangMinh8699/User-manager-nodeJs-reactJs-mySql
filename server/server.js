const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

// database
const db = require("./app/models");

db.sequelize.sync();

// routes
require("./app/routes/user.routes")(app);

app.listen(8080, function () {
  console.log("listening on 8080");
});
