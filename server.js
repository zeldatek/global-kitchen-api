require("dotenv").config();
//console.log(process.env.MONGODB_URI);

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("The Global Kitchen API Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});