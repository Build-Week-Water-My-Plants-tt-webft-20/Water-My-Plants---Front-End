import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Route, Switch} from "react-router-dom";
import Dashboard from './components/Dashboard'

function App() {
  localStorage.clear()
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
