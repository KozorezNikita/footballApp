import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { footballRoutes } from "../router/router";

function FootballRouter() {
  return (
    <Switch>
      {footballRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="FootballApp" />
    </Switch>
  );
}

export default FootballRouter;
