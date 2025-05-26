import express from "express";
import sayActions from "./modules/say/sayActions";
import programActions from "./modules/program/programActions";



const router = express.Router();


/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/programs", programActions.browse);

// Declaration of a "Welcome" route

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
