const Router = require("express");
const router = new Router();
const teamsController = require("../controller/teams.controller");

router.post("/teams", teamsController.createTeam);
router.get("/teams", teamsController.getTeams);
router.get("/teams/:id", teamsController.getOneTeam);
router.put("/teams/:id", teamsController.updateTeam);
router.delete("/teams/:id", teamsController.deleteTeam);

module.exports = router;
