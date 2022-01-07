import axios from "axios";

export default class PlayersService {
  static async getAll(team_id) {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/players/statistic`,
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
      `${process.env.REACT_APP_BASE_URL}/api/players/statistic/` + id
    );
    return response;
  }

  static async getPlayersStatistic() {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/players/statistic`
    );
    return response;
  }
}
