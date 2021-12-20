const Router = require("express");
const router = new Router();
const playersController = require("../controller/players.controller");

router.get("/players/statistic/", playersController.getPlayersStats);
router.get("/players/statistic/:id", playersController.getOnePlayerStats);
router.post("/players", playersController.createPlayer);
router.get("/players", playersController.getPlayers);
router.get("/players/:id", playersController.getOnePlayer);
router.put("/players/:id", playersController.updatePlayer);
router.delete("/players/:id", playersController.deletePlayer);

module.exports = router;
