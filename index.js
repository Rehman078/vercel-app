import express from "express";
import cors from "cors";
import connectDB from './config/dbConnection.js';
import bookRoutes from "./routes/bookRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port =process.env.PORT|| 3000;
app.use(express.json())
connectDB()
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Use book routes
app.use("/api", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
