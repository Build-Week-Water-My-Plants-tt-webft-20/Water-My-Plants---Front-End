import "./App.css";
import NavigationBar from "./components/Nav.js";
import Landing from "./components/Landing";

import Login from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route exact path="/">
        <Landing />
      </Route>
      ,
      <Route path="/login">
        <Login />
      </Route>
      ,
    </div>
  );
}

export default App;
