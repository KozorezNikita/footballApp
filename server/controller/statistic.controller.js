const db = require("../db");

class statisticController {
  async createStat(req, res) {
    const {
      goals,
      assists,
      yellow_cards,
      red_cards,
      average_rating,
      player_id,
    } = req.body;
    const newStat = await db.query(
      "INSERT INTO statistic (goals, assists, yellow_cards, red_cards, average_rating, player_id) values ($1, $2, $3, $4, $5, $6) RETURNING *",
      [goals, assists, yellow_cards, red_cards, average_rating, player_id]
    );
    res.json(newStat.rows[0]);
  }

  async getStats(req, res) {
    const stats = await db.query("Select * FROM statistic");
    res.json(stats.rows);
  }
  async getOneStat(req, res) {
    const id = req.params.id;
    const stat = await db.query("SELECT * FROM statistic where id = $1", [id]);
    res.json(stat.rows[0]);
  }
  async updateStat(req, res) {
    const {
      goals,
      assists,
      yellow_cards,
      red_cards,
      average_rating,
      player_id,
    } = req.body;
    const id = req.params.id;
    const updatedStat = await db.query(
      "UPDATE statistic set goals = $1, assists = $2 , yellow_cards = $3, red_cards = $4, average_rating = $5, player_id = $6  where id = $7 RETURNING *",
      [goals, assists, yellow_cards, red_cards, average_rating, player_id, id]
    );
    res.json(updatedStat.rows[0]);
  }
  async deleteStat(req, res) {
    const id = req.params.id;
    const stat = await db.query("DELETE FROM statistic where id = $1", [id]);
    res.json(stat.rows[0]);
  }
}

module.exports = new statisticController();
