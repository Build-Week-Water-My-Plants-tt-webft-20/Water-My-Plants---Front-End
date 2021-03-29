import "./App.css";
import NavigationBar from "./components/Nav.js";
import Landing from "./components/Landing";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Route path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
