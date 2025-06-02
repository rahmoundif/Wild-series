
// Import access to data
import categoryRepository from "./categoryRepository";
// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

/* Here you code */
const browse: RequestHandler = async (req, res) => {
 const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
};

const read : RequestHandler = (req, res) => {
    const parseId = Number.parseInt(req.params.id);

    const category = categories.find((c) => c.id === parseId);

    if(category != null) {
        res.json(category);
    } else {
        res.status(404).send("Category Not available");
    }
};

// Export them to import them somewhere else

export default {browse, read};