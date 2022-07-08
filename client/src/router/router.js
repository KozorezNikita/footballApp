import FootballApp from "../pages/FootballApp";
import FootballCardById from "../pages/FootballCardById";
import TeamStatHub from "../pages/TeamStatHub";
import Login from "../components/Login";
import TableHub from "../pages/TableHub";
import Field from "../pages/Field";
import First from "../pages/Squad";

export const footballRoutes = [
  { path: "/tableHub", component: TableHub, exact: true },

  { path: "/footballApp", component: FootballApp, exact: false },
];

export const loginRoutes = [{ path: "/login", component: Login, exact: true }];
