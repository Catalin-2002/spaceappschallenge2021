import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/home'
import Navbar from './Components/NavBar/NavBar'
import airQuality from './Pages/airQuality';
import publicTransport from './Pages/PublicTransport/publicTransport';
import slums from './Pages/slums';

import ParkOptimiser from './Pages/ParkOptimiser/ParkOptimiser.js';

function App() {
  return (
    <>
<Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component = {Home}/>
    <Route path='/parkoptimiser' component = {ParkOptimiser}/>
    <Route path='/airquality' component = {airQuality}/>
    <Route path='/transport' component = {publicTransport}/>
    <Route path='/slums' component = {slums}/>
  </Switch>
  </Router>
</>
  );
}

export default App;
