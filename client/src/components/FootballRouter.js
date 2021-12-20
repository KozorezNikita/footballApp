import {useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FootballContext } from "../context/FootballContext";
import { footballRoutes } from "../router/router";
import { loginRoutes } from "../router/router";


function FootballRouter() {
  const {auth} = useContext(FootballContext);

  

  return (

    auth ? 
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

    :

    <Switch>
      {loginRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="Login" />
    </Switch>


  );
}

export default FootballRouter;
