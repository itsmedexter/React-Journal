import React from "react";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
