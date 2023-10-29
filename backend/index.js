const express = require("express");

const mongoose = require("mongoose")

const authRouter = require("./authRouter")

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use("./auth", authRouter)

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://konstantin:Roy997711@cluster0.dowoxyk.mongodb.net/`)
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// app.get("/api", (req, res) => {
//   res.json({
//     message: "Hello from backend",
//   });
// });
