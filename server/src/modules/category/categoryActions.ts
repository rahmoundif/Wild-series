
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

const edit: RequestHandler = async (req, res) => {
  try {
    res.status(200).json({ message: 'Category updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    res.status(201).json({ message: 'Category created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    res.status(200).json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};

const validate: RequestHandler = (req, res, next) => {
  type ValidationError = {
    field: string;
    message: string;
  };

  const errors: ValidationError[] = [];

  const { name } = req.body;

  // put your validation rules here
  if (name == null) {
    errors.push({ field: "name", message: "The field is required" });
  } else if (name.length > 255) {
    errors.push({ field: "name", message: "Should contain less than 255 characters" });
  }

  
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validationErrors: errors });
  }
};

// Export them to import them somewhere else

export default {browse, read, edit, add, destroy, validate};