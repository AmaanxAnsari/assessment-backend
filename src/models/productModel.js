// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./categoryModel"); // Import the Category model

const Product = sequelize.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the association
Product.belongsTo(Category, {
  foreignKey: "category_id",
  allowNull: false,
});

module.exports = Product;
