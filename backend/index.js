const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const staffRoutes = require("./routes/staffRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", staffRoutes);

app.get("/", (req, res) => {
  res.send("Staff Management API running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
