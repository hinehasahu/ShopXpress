import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    res.status(200).json({ message: "Product lists.", Products: products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getProductsbyId = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    const { id } = req.params;
    let index = products.findIndex((prod, index) => prod.id == id);

    if (index == -1) {
      res.status(404).json({ message: "No Product Found." });
    } else {
      let filteredProduct = products.filter((prod) => {
        return prod.id == id;
      });

      //   console.log(filteredProduct)
      res
        .status(200)
        .json({ message: "Product list by id.", Product: filteredProduct });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const addProducts = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    let id = products[products.length - 1].id + 1;
    products.push({ id, ...req.body });
    fs.writeFileSync("./db.json", JSON.stringify(data));

    res.status(201).json({
      message: "Product added.",
      AddedProduct: products[products.length - 1],
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    const { category } = req.params;

    let filteredCategories = products.filter((prod) =>
      prod.category.includes(category)
    );

    // console.log(filteredCategories)
    res
      .status(200)
      .json({ message: "Products by category.", Products: filteredCategories });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getProductsBySearch = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    const { term } = req.params;

    let filteredProducts = products.filter(
      (prod) => prod.name.includes(term) || prod.category.includes(term)
    );

    console.log(filteredProducts);
    res
      .status(200)
      .json({ message: "Products by category.", Products: filteredProducts });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const updateProducts = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    const { id } = req.params;
    let index = products.findIndex((prod, index) => prod.id == id);

    if (index == -1) {
      res.status(404).json({ message: "No Product Found." });
    } else {
      let filteredProduct = products.map((prod) => {
        if (prod.id == id) {
        }
      });

      //   console.log(filteredProduct)
      res
        .status(200)
        .json({ message: "Product list by id.", Product: filteredProduct });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const deleteProducts = async (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let products = data.products;

    const { id } = req.params;
    let index = products.findIndex((prod, index) => prod.id == id);

    if (index == -1) {
      res.status(404).json({ message: "No Product Found." });
    } else {
      let filteredProduct = products.filter((prod) => {
        return prod.id !== id;
      });
      data.products = filteredProduct;
      //   console.log(filteredProduct)
      let deletedProd = products.filter((prod) => prod.id == id);
      console.log(deleteProducts);
      fs.writeFileSync("./db.json", JSON.stringify(data));
      res.status(200).json({
        message: "Product list by id.",
        DeletedProduct: deletedProd,
        Product: products,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
