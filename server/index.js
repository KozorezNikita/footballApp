require("dotenv").config();

const express = require("express");

const cors = require("cors");

const playersRouter = require("./routes/players.routes");
const statisticRouter = require("./routes/statistic.routes");
const teamsRouter = require("./routes/teams.routes");
const authRouter = require("./routes/auth.routes");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api", playersRouter);
app.use("/api", statisticRouter);
app.use("/api", teamsRouter);
app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.status(200).json({message: "Hi, Nikita!"})
})

app.listen(PORT, () => console.log(`server on ${PORT} `));
