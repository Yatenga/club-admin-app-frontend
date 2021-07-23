import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About';
import HomeHome from './components/Dashboard/HomeHome';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component{
  render(){
   return(
     <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path='/register' component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard/HomeHome" component={HomeHome} />
          </Switch>
        </Router>
     </React.Fragment>
   )
  }
}

export default App;
