/*
import axios from "axios";

export default class PlayersService {
  static async getAll(team_id) {
    const response = await axios.get(
      "http://localhost:8080/api/players/statistic",
      {
        params: {
          team_id: team_id,
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      "http://localhost:8080/api/players/statistic/" + id
    );
    return response;
  }

  static async getByTeamId(team_id = 1) {
    const response = await axios.get("http://localhost:8080/api/players", {
      params: {
        team_id: team_id,
      },
    });
    return response;
  }
}

*/

import axios from "axios";

export default class PlayersService {
  static async getAll(team_id) {
    const response = await axios.get(
      "http://localhost:8080/api/players/statistic",
      {
        params: {
          team_id: team_id,
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      "http://localhost:8080/api/players/statistic/" + id
    );
    return response;
  }

  static async getPlayersStatistic() {
    const response = await axios.get(
      "http://localhost:8080/api/players/statistic"
    );
    return response;
  }
}
