import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AllWaters } from "../components/AllWaters/AllWaters";
import { Main } from "../components/Main/Main";
import { WaterPage } from "../components/WaterPage/WaterPage";

export function RootRouter() {
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
