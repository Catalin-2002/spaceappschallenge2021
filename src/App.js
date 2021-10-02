import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/NavBar/NavBar'
import airQuality from './Components/airQuality';
import publicTransport from './Components/publicTransport';
import greenAreas from './Components/greenAreas';
import slums from './Components/slums';

function App() {
  return (
    <>
<Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact component = {Home}/>
    <Route path='/airquality' component = {airQuality}/>
    <Route path='/airquality' component = {airQuality}/>
    <Route path='/transport' component = {publicTransport}/>
    <Route path='/greenareas' component = {greenAreas}/>
    <Route path='/slums' component = {slums}/>
  </Switch>
  </Router>
</>


  );
}

export default App;
