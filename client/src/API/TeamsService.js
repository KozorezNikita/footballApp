import axios from "axios";

export default class TeamsService {
  static async getTeamById(id) {
    const response = await axios.get("http://localhost:8080/api/teams/" + id);
    return response;
  }
}
