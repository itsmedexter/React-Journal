import React, { useState, useEffect } from "react";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/Nav";

function App() {
  const [userId, setUserId] = useState(undefined);
  console.log(userId)
  const setAdminId = id => {
    console.log('YOU HIT THIS', id)
    setUserId(id);
  }

  useEffect(() => {
    const userId = localStorage.getItem('temp');
    if(userId) {
      setAdminId(userId)
    }
  }, []);



  return (

    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <div className="App">
            <Switch>
            {/* // Checkout how setuserid is made. ID not showing */}
              <Route exact path="/" component={() => <Signup setUserId={setAdminId} />} />
              <Route exact path="/home" component={() => <Home userId={userId} />} />
            </Switch>
          </div>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;



// Checkout how setuserid is made.
