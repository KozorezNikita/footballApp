import axios from "axios";

export default class TeamsService {
  static async getTeamById(id) {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/teams/` + id
    );
    return response;
  }

  static async getTeams() {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/teams`
    );
    return response;
  }
}
