import "./App.css";
import Landing from "./components/Landing";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
