import React from "react";
import Signup from "./pages/Signup";
// import Home from "./pages/Home";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";

function App() {
  return (
      <div>
        <StoreProvider>
          <Nav />
          <div className="App">
            <Signup />
          </div>
        </StoreProvider>
      </div>

  );
}


export default App;
