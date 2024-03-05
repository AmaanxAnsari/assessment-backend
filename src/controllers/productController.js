// controllers/productController.js
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

// Get all products
// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     console.log(products);
//     res.json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_id", "category_name"],
        },
      ],
    });
    console.log("Products", products);

    const formattedProducts = products.map((product) => {
      return {
        product_id: product.product_id,
        product_name: product.product_name,
        category: {
          category_id: product.Category ? product.Category.category_id : null,
          category_name: product.Category
            ? product.Category.category_name
            : null,
        },
      };
    });

    console.log("Formatted Products:", formattedProducts);

    res.json(formattedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { product_name, category_id } = req.body;

  try {
    const newProduct = await Product.create({ product_name, category_id });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { product_name, category_id } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product
    await product.update({ product_name, category_id });

    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete the product
    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
