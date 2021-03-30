import "./App.css";
import NavigationBar from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Signup from "./components/Signup"

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
        <Signup />
      </Route>
    </div>
  );
}

export default App;
