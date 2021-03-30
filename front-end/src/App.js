import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
