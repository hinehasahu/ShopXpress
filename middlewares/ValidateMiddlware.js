export const checkandvalidate = async (req, res, next) => {
  try {
    const { name, category, price } = req.body;
    if (!name || !category || !price) {
      res.status(400).json({ message: "Missing fields." });
    }
    if (name == "" || category == "" || price == 0) {
      res.status(400).json({ message: "Missing fields." });
    }

    next();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong validating middleware." });
    console.log(error);
  }
};
