import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"
// import PrivateRoute from './components/PrivateRoute'

import { Route, Switch, Redirect} from "react-router-dom";
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
        {/* <PrivateRoute exact path="/dashboard" component=  {Dashboard} /> */}
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
