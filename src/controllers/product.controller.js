const db_connect = require("../model/database");

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db_connect.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price },
    },
  });
};

exports.listAllProducts = async (req, res) => {
  const response = await db_connect.query(
    "SELECT * FROM products ORDER BY product_name ASC"
  );
  res.status(200).send(response.rows);
  console.log(response.rows);
};

exports.findProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db_connect.query(
    "SELECT * FROM products WHERE productid = $1",
    [productId]
  );
  res.status(200).send(response.rows);
  console.log(response.rows);
};

exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  const response = await db_connect.query(
    "UPDATE product SET product_name = $1, quantity = $2, price = $3",
    [product_name, quantity, price]
  );
  res.status(200).send(response.rows, {
    message: "Product Update Successfully!",
    productId,
  });
  console.log(response.rows);
};

exports.deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db_connect.query("DELETE FROM products WHERE productId = $1", [
    productId,
  ]);

  res.status(200).send({ message: "Product deleted successfully!", productId });
  console.log(response.rows);
};
