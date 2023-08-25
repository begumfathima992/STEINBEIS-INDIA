import logo from './logo.svg';
import React from 'react';
import './App.css';
import CreateUsers from './components/CreateUsers.js';
import Asserts from './components/Asserts';
import Login from './components/Login';
import Purchase from './components/Purchase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  return (
    <div className="App">
        
         <Router>
      <Switch>
     
        <Route exact path='/' component={CreateUsers} />
        <Route exact path='/assets' component={Asserts} />
        <Route path="/login" component={Login} />
      <Route path="/purchase" component={Purchase}/>
     
        {/* Add more routes here */}
      </Switch>
    </Router>    
   
    </div>
  );
}

export default App;
