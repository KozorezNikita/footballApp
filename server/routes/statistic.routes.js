const Router = require("express")
const router = new Router()
const statisticController = require("../controller/statistic.controller")

router.post("/statistic", statisticController.createStat)
router.get("/statistic", statisticController.getStats)
router.get("/statistic/:id", statisticController.getOneStat)
router.put("/statistic", statisticController.updateStat)
router.delete("/statistic/:id", statisticController.deleteStat)




module.exports = router