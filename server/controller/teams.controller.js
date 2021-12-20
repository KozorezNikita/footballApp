const db = require("../db");

class teamsController {
  async createTeam(req, res) {
    const { team } = req.body;
    const newTeam = await db.query(
      "INSERT INTO teams (team) values ($1) RETURNING *",
      [team]
    );
    res.json(newTeam.rows[0]);
  }
  async getTeams(req, res) {
    const teams = await db.query("Select * FROM teams");
    res.json(teams.rows);
  }
  async getOneTeam(req, res) {
    const id = req.params.id;
    const team = await db.query("SELECT * FROM teams where id = $1", [id]);
    res.json(team.rows[0]);
  }
  async updateTeam(req, res) {
    const { team, year, nickname, description, stadium, badge } = req.body;
    const id = req.params.id;
    const updatedTeam = await db.query(
      "UPDATE teams set team = $1, year = $2, nickname = $3, stadium = $4, badge = $5, description = $6 where id = $7 RETURNING *",
      [team, year, nickname, stadium, badge, description, id]
    );
    res.json(updatedTeam.rows[0]);
  }
  async deleteTeam(req, res) {
    const id = req.params.id;
    const team = await db.query("DELETE FROM teams where id = $1", [id]);
    res.json(team.rows[0]);
  }
}

module.exports = new teamsController();
