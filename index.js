const express = require("express");
const app = express();
const PORT = process.env.port || 6655;
//const PORT =6655;
const cors = require("cors");
require("./config/db");
//require("./model/user.model");
const userRouter = require("./router/user.router");

app.use(express.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up and Running ...",
  });
});

app.use("/User", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Up on ${PORT}`)
})