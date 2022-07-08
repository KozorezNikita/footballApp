import { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FootballContext } from "../context/FootballContext";
import { footballRoutes } from "../router/router";
import { loginRoutes } from "../router/router";

function FootballRouter() {
  const { token, setToken } = useContext(FootballContext);

  return token ? (
    <Switch>
      {footballRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Switch>
  ) : (
    <Switch>
      {loginRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Switch>
  );
}

export default FootballRouter;
