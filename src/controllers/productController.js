const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

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

// Controller function for paginated product retrieval
const getPaginatedProducts = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;

    // Calculate offset based on page number and page size
    const offset = (page - 1) * pageSize;

    // Fetch products with pagination
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_id", "category_name"],
        },
      ],
      limit: parseInt(pageSize),
      offset: parseInt(offset),
    });

    const totalProducts = await Product.count();

    const totalPages = Math.ceil(totalProducts / pageSize);

    const response = {
      currentPage: parseInt(page),
      totalPages,
      pageSize: parseInt(pageSize),
      totalProducts,
      products,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getPaginatedProducts,
};
