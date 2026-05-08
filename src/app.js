const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require("#routes/userRoutes"); 
app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes); 

app.get("/", (req, res) => {
  res.send("JWT Auth API running");
});

module.exports = app;
