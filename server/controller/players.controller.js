

const db = require("../db");

class playersController {
  async getPlayersStats(req, res) {
    const playersTeamId = req.query.team_id;
    if (playersTeamId) {
      const playerStats = await db.query(
        "SELECT players.id, players.name, players.surname, players.image, players.position, players.team_id,  statistic.goals, statistic.assists, statistic.yellow_cards, statistic.red_cards, statistic.average_rating, statistic.player_id   from players LEFT OUTER JOIN statistic on players.id = statistic.player_id where players.team_id = $1 ",
        [playersTeamId]
      );
      res.json(playerStats.rows);
    } else {
      const playerStats = await db.query(
        "SELECT players.id, players.name, players.surname, players.image, players.position, players.team_id,  statistic.goals, statistic.assists, statistic.yellow_cards, statistic.red_cards, statistic.average_rating, statistic.player_id   from players INNER JOIN statistic on players.id = statistic.player_id"
      );
      res.json(playerStats.rows);
    }
  }

  async getOnePlayerStats(req, res) {
    const playersId = req.params.id;
    const playerStats = await db.query(
      "SELECT players.id, players.name, players.surname, players.image, players.position, players.team_id, statistic.goals, statistic.assists, statistic.yellow_cards, statistic.red_cards, statistic.average_rating, statistic.player_id   from players INNER JOIN statistic on players.id = statistic.player_id where players.id = $1 ",
      [playersId]
    );
    res.json(playerStats.rows[0]);
  }




  async createPlayer(req, res) {
    const { name, surname, image, position, team_id } = req.body;
    const newPlayer = await db.query(
      "INSERT INTO players (name, surname, image, position, team_id) values ($1, $2, $3, $4, $5) RETURNING *",
      [name, surname, image, position, team_id]
    );
    //const newPerson = await db.query("select * from information_schema.tables" )
    res.json(newPlayer.rows[0]);
  }

  async getPlayers(req, res) {
    const team_id = req.query.team_id;

    if (team_id) {
      const teamPlayers = await db.query(
        "SELECT * FROM players where team_id = $1 ",
        [team_id]
      );
      res.json(teamPlayers.rows);
    } else {
      const allPlayers = await db.query("Select * FROM players");
      res.json(allPlayers.rows);
    }
  }

  async getOnePlayer(req, res) {
    const id = req.params.id;
    const getPlayer = await db.query("SELECT * FROM players where id = $1", [
      id,
    ]);
    res.json(getPlayer.rows[0]);
  }

  async updatePlayer(req, res) {
    const { name, surname, image, position, team_id } = req.body;
    const id = req.params.id;
    const updatedPlayer = await db.query(
      "UPDATE players set name = $1, surname = $2 , image = $3, position = $4, team_id = $5 where id = $6 RETURNING *",
      [name, surname, image, position, team_id, id]
    );
    res.json(updatedPlayer.rows[0]);
  }
  
  async deletePlayer(req, res) {
    const id = req.params.id;
    const deletedPlayer = await db.query("DELETE FROM players where id = $1", [
      id,
    ]);
    res.json(deletedPlayer.rows[0]);
  }
}

module.exports = new playersController();



/*
 async deletePlayer(req, res) {
    const id = req.params.id;
    const deletedPlayer = await db.query("DELETE FROM players where id = $1", [
      id,
    ]);
    res.json(deletedPlayer.rows[0]);
  }
  


 async updatePlayer(req, res) {
    const { name, surname, image, position, team_id } = req.body;
    const id = req.params.id;
    const updatedPlayer = await db.query(
      "UPDATE players set name = $1, surname = $2 , image = $3, position = $4, team_id = $5 where id = $6 RETURNING *",
      [name, surname, image, position, team_id, id]
    );
    res.json(updatedPlayer.rows[0]);
  }




  
  async updateOnePlayerStat(req, res) {
    const { name, surname, image, position, team_id, goals, assists, yellow_cards, red_cards, average_rating } = req.body;
    const playersId = req.params.id;
    const updatedPlayer = await db.query(
      "UPDATE players set name = $1, surname = $2 , image = $3, position = $4, team_id = $5 , goals = $6, assists = $7, yellow_cards = $8, red_cards = $9, average_rating = $10 where players.id = 11 RETURNING *",
      [name, surname, image, position, team_id, goals, assists, yellow_cards, red_cards, average_rating, playersId]
    );
    res.json(updatedPlayer.rows[0]);
  }




  
  "ALTER TABLE statistic DROP CONSTRAINT player_id; FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE where id = $1"
  
  
  */