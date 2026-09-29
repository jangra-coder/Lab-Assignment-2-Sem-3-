const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// Middleware to read JSON data from request body
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Modular routing
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Student Management REST API" });
});

// 404 handler for wrong routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ message: "Something went wrong on the server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
