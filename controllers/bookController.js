import Book from "../models/bookModel.js";
import {httpResponse} from "../utils/httpResponse.js"

// Create a new book
export const createBook = async (req, res) => {
  try {
    const bodyData = req.body;
    const book = new Book(bodyData);
    const bookData = await book.save();
    return httpResponse.CREATED(res, bookData)
  } catch (error) {
    return httpResponse.BAD_REQUEST(res, error)
  }
};

// Read all books
export const readAllBooks = async (req, res) => {
  try {
    const bookData = await Book.find({});
    return httpResponse.SUCCESS(res, { message: 'Book retrieved successfully', bookData })
  } catch (error) {
    return httpResponse.BAD_REQUEST(res, error)
  }
};

// Read a single book by ID
export const readBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    return httpResponse.SUCCESS(res, { message: 'Book retrieved by id successfully', book })
  } catch (error) {
    return httpResponse.BAD_REQUEST(res, error)
  }
};

// Update a book by ID
export const updateBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    return httpResponse.SUCCESS(res, { message: 'Book update successfully', book })
  } catch (error) {
    return httpResponse(res, error)
  }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    return httpResponse.SUCCESS(res, { message: 'Book retrieved successfully'})
  } catch (error) {
    return httpResponse.BAD_REQUEST(res, error)
  }
};
