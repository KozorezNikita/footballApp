import StatisticHub from "../pages/StatisticHub";
import FootballApp from "../pages/FootballApp";
import FootballCardById from "../pages/FootballCardById";
import TeamStatHub from "../components/TeamStatHub";

export const footballRoutes = [
  { path: "/statisticHub", component: StatisticHub, exact: true },
  { path: "/footballApp", component: FootballApp, exact: true },
  { path: "/footballApp/:id", component: FootballCardById, exact: true },
  { path: "/teamStatHub", component: TeamStatHub, exact: true },
];