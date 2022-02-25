import FootballApp from "../pages/FootballApp";
import FootballCardById from "../pages/FootballCardById";
import TeamStatHub from "../pages/TeamStatHub";
import Login from "../components/Login";
import TableHub from "../pages/TableHub";

export const footballRoutes = [
  { path: "/tableHub", component: TableHub, exact: true },
  { path: "/footballApp", component: FootballApp, exact: true },
  { path: "/footballApp/:id", component: FootballCardById, exact: true },
  { path: "/teamStatHub", component: TeamStatHub, exact: true },
];

export const loginRoutes = [{ path: "/login", component: Login, exact: true }];
