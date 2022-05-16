require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const bodyparser = require('body-parser')
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
//app.use(bodyparser.json());
// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.get("/", (req,res) =>{
  res.send("Hello World");
})

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((req,res,next,err) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
