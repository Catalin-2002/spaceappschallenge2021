import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/NavBar/NavBar'

import AirQualityPage from './Pages/AirQualityPage';
import ParkOptimiserPage from './Pages/ParkOptimiserPage';
import PublicTransportPage from './Pages/PublicTransportPage';
import SlumsPage from './Pages/SlumsPage';

function App() {
  return (
    <>
<Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component = {Home}/>
    <Route path='/parkoptimiser' component = {ParkOptimiserPage}/>
    <Route path='/airquality' component = {AirQualityPage}/>
    <Route path='/transport' component = {PublicTransportPage}/>
    <Route path='/slums' component = {SlumsPage}/>
  </Switch>
  </Router>
</>
  );
}

export default App;
