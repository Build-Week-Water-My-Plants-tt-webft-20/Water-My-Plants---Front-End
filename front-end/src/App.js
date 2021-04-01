import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"
import PrivateRoute from './components/PrivateRoute'

import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard'

function App() {
  localStorage.clear();
  return (
    <div className="App">
      <NavigationBar />

       <PrivateRoute exact path="dashboard" component={Dashboard} />
      
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}/>
      <Route exact path="/" component={Landing}/>
    </div>
  );
}

export default App;
