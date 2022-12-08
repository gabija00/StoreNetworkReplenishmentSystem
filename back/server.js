const express = require("express");
const cors = require("cors");


const app = express();

var corsOptions = {
  //origin: "http://localhost:4200"
  origin: "https://preikiu-papildymas.herokuapp.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Gabijos Vaivadaites parduotuviu tinklo prekiu papildymo sistema." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/shops.routes")(app);
require("./app/routes/goods_departments.routes")(app);
require("./app/routes/products.routes")(app);
require("./app/routes/products_public.routes")(app);





app.get("*", (req, res) => {
  res.json({ message: "Path not defined." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


