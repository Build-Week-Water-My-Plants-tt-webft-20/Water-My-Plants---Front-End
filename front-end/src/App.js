import "./App.css";
import NavigationBar from "./components/Nav.js";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";

import Login from "./components/Login";
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import PlantList from './components/PlantList'
import AddPlant from './components/AddPlant'

function App() {
  return (
    <div className="App">
      <NavigationBar />

      
      <PrivateRoute exact path="plant-list" component={PlantList} />
      <PrivateRoute exact path="add-plant" component={AddPlant} />
      
      <Route path="/">

        <Landing />
      </Route>
      ,
      <Route path="/login">
        <Login />
      </Route>
      ,
      <Route path="/signup">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
