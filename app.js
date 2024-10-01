const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const db = require("./util/database");
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);


db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
