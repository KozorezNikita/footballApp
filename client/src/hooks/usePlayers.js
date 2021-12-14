import { useMemo } from "react";

export const useSortedPlayers = (players, sort) => {
  const sortedPlayers = useMemo(() => {
    return players.filter((player) => player.team_id === sort);
  }, [sort, players]);
  return sortedPlayers;
};

export const usePlayers = (players, sort, text) => {
  const sortedPlayers = useSortedPlayers(players, sort);
  const sortedandSearchedPlayers = useMemo(() => {
    return sortedPlayers.filter(
      (player) =>
        player.surname.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
  }, [text, sortedPlayers]);
  return sortedandSearchedPlayers;
};

/*

export const useSortedPlayers = (players, sort) => {
  const sortedPlayers = useMemo(() => {
    if (sort) {
      return [...players].sort((a, b) =>
        a[sort] === b[sort] ? 0 : a[sort] > b[sort] ? 1 : -1
      );
    }
    return players;
  }, [sort, players]);
  return sortedPlayers;
};




export const useSortedPlayers = (players, sort) => {
  const sortedPlayers = useMemo(() => {
    if (sort) {
      return [...players].filter(player => player.team_id === sort);
    } return players
  }, [sort, players]);
  return sortedPlayers;
};



*/
