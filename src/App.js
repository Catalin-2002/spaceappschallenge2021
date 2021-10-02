import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import airQuality from './Components/airQuality';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/airquality' component = {airQuality}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
