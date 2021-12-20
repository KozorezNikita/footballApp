import { useState, useEffect } from "react";
import PlayersService from "../API/PlayersService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";

function StatisticHub() {
  const [players, setPlayers] = useState([]);
  const [fetchPlayers, isPlayersLoading, playerError] = useFetching(
    async () => {
      const players = await PlayersService.getPlayersStatistic();
      setPlayers(players.data);
    }
  );
  const [search, setSearch] = useState({ amount: -1, text: "" });
  const [filter, setFilter] = useState("id");

  useEffect(() => {
    fetchPlayers();
  }, []);

  const filteredPlayers = [...players]
    .sort((a, b) =>
      filter === "id" ? a[filter] - b[filter] : b[filter] - a[filter]
    )
    .slice(0, search.amount);
  const filteredByTextPlayers = filteredPlayers.filter(
    (player) =>
      player.surname
        .toLowerCase()
        .indexOf(search.text.toLowerCase().toString()) !== -1
  );

  return (
    <div className="stat-hub">
      {isPlayersLoading ? (
        <MyLoader />
      ) : (
        <div>
          <div className="search">
            <h1>Statistic hub</h1>
            <div>
              <MySelect
                value={search.amount}
                onChange={(sort) =>
                  setSearch({ ...search, amount: Number(sort) })
                }
                defaultValue="sort by"
                options={[
                  { value: 5, name: "5" },
                  { value: 10, name: "10" },
                  { value: 20, name: "20" },
                  { value: -1, name: "Show all" },
                ]}
              />
              <MyInput
                value={search.text}
                placeholder="type to search"
                onChange={(e) => setSearch({ ...search, text: e.target.value })}
              />
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th onClick={() => setFilter("id")}>№</th>
                  <th onClick={() => setFilter("name")}>Name</th>
                  <th onClick={() => setFilter("surname")}>Surname</th>

                  <th onClick={() => setFilter("goals")}>Goals</th>
                  <th onClick={() => setFilter("assists")}>Assists</th>
                  <th onClick={() => setFilter("yellow_cards")}>
                    Yellow cards
                  </th>
                  <th onClick={() => setFilter("red_cards")}>Red cards</th>
                  <th onClick={() => setFilter("average_rating")}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {filteredByTextPlayers.map((player, index) => (
                  <tr key={player.id}>
                    <td>{index + 1} .</td>
                    <td>{player.name}</td>
                    <td>{player.surname}</td> <td>{player.goals}</td>
                    <td>{player.assists}</td>
                    <td>{player.yellow_cards}</td>
                    <td>{player.red_cards}</td>
                    <td>{player.average_rating}</td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatisticHub;
