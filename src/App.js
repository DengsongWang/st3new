import Navbar from './Navbar';
import Home from './Home';
import RealNavbar from './RealNavbar';
import logo from './img/logo.PNG'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Dropdown, Form} from 'react-router-dom';
import BuyOnline from './BuyOnline';
import Otherswork from './Otherswork';
import Appointment from './Appointment';
import Appointment2 from './Appointment2';
import Recipes from './Recipes';





function App() {
  const title='Welcome';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="logoBar">
          <img src={logo} alt="logo" width="300" height="120" />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/st3new">
              <RealNavbar></RealNavbar>
              <Home></Home>
            </Route>
            
            <Route exact path="/">
              <RealNavbar></RealNavbar>
              <Home></Home>
            </Route>

            <Route path="/BuyOnline">
              <BuyOnline />
            </Route>

            <Route path="/Otherswork">
              <Otherswork />
            </Route>

            <Route path="/Appointment">
              <Appointment />
            </Route>

            <Route path="/Appointment2">
              <Appointment2 />
            </Route>

            <Route path="/Recipes">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
