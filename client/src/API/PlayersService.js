import axios from "axios";

export default class PlayersService {
  static async getAll(team_id) {
    const response = await axios.get(
      "https://pure-headland-63139.herokuapp.com/api/players/statistic",
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
      "https://pure-headland-63139.herokuapp.com/api/players/statistic/" + id
    );
    return response;
  }

  static async getPlayersStatistic() {
    const response = await axios.get(
      "https://pure-headland-63139.herokuapp.com/api/players/statistic"
    );
    return response;
  }
}
