import logo from './plantslogo.png';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
     <Route exact path='/login' component={Login} />

    </div>
  );
}

export default App;
