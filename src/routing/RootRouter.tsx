import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AllWaters } from "../components/AllWaters/AllWaters";
import { Main } from "../components/Main/Main";
import { WaterPage } from "../components/WaterPage/WaterPage";

import { ACTIONS } from "../redux/constants";

export function RootRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_WATERS });
  }, []);

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/waters">
            <AllWaters />
          </Route>
          <Route path="/waters/:id">
            <WaterPage />
          </Route>
          <Route exact path="/register"></Route>
          <Route exact path="/posts/:id"></Route>
          <Route exact></Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}
