import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import airQuality from './Components/airQuality';
import Home from './Pages/Home';
import Navbar from './Components/NavBar/NavBar';

import ParkOptimiser from './Pages/ParkOptimiser/ParkOptimiser.js';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/parkoptimiser' component = {ParkOptimiser} />
        <Route path='/airquality' component = {airQuality}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
