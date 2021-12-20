require("dotenv").config();

const express = require("express");

const playersRouter = require("./routes/players.routes");
const statisticRouter = require("./routes/statistic.routes");
const teamsRouter = require("./routes/teams.routes");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", playersRouter);
app.use("/api", statisticRouter);
app.use("/api", teamsRouter);

app.listen(PORT, () => console.log(`server on ${PORT} `));



