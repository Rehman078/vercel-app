import express from "express";
import {
  createBook,
  readAllBooks,
  readBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/bookController.js";

const router = express.Router();
// Create book
router.post("/book", createBook);
// Read all books
router.get("/books", readAllBooks);
// Read a single book by ID
router.get("/book/:id", readBookById);
// Update book by ID
router.patch("/book/:id", updateBookById);
// Delete book by ID
router.delete("/book/:id", deleteBookById);

export default router;
