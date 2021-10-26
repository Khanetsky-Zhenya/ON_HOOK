import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { RootRouter } from "./routing/RootRouter";
import { HeaderApp } from "./components/HeaderApp/HeaderApp";
import { AllWaters } from "./components/AllWaters/AllWaters";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
