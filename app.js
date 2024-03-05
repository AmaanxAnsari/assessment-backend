const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/config/database");
require("dotenv").config();
const categoryRoute = require("./src/routes/categoryRoute");
const productRoute = require("./src/routes/productRoute");
const cors = require("cors");

const app = express();
app.use(cors());

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize Model

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database and tables synced!");
//   })
//   .catch((error) => {
//     console.error("Error syncing database:", error);
//   });
const Category = require("./src/models/categoryModel");
const Product = require("./src/models/productModel");

//Routes
app.use("/api", categoryRoute);
app.use("/api", productRoute);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
