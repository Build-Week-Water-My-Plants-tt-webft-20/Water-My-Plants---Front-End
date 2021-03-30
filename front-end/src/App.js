import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"

import { Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import PlantForm from './components/PlantForm'

function App() {
  localStorage.clear();
  
  return (
    <div className="App">
      <NavigationBar />

      {/* <PrivateRoute exact path="plant-list" component={Dashboard} />
      <PrivateRoute exact path="add-plant" component={PlantForm} /> */}
      
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/plant-form" component={PlantForm}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}/>
      <Route exact path="/" component={Landing}/>
    </div>
  );
}

export default App;
