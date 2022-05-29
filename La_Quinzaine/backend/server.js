require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors');

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
}


// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// Redirect requests to endpoint starting with /posts to postRoutes.js

// ======================== ROUTES =======================
app.use("/api/beers", require("./routes/beerRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.get("/api/", (req,res) =>{
  res.send("Hello World");
})
app.get("/", (req, res) => {
  res.json({ message: "Welcome to laquinzaine application." });
});

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((req,res,next,err) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  return res.status(500
  ).end;
  /*res.status(500).send({
    message: "Something went rely wrong",
  });*/
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
