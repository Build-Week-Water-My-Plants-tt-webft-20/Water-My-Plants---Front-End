import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"
import PrivateRoute from './components/PrivateRoute'

import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
