// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./categoryModel");

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
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "category_id",
    },
  },
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  sourceKey: "category_id",
});

module.exports = Product;
