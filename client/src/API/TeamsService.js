import axios from "axios";

export default class TeamsService {
  static async getTeamById(id) {
    const response = await axios.get(
      "https://pure-headland-63139.herokuapp.com/api/teams/" + id
    );
    return response;
  }

  static async getTeams() {
    const response = await axios.get(
      "https://pure-headland-63139.herokuapp.com/api/teams"
    );
    return response;
  }
}
