import React, { useEffect } from 'react';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Navbar from './containers/Navbar';

import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { IStore } from './types';
import './App.css';
import CustomerCard from './components/customer/Customer';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customer/:id" component={CustomerDetails} />

            <Route
              path="/demo"
              component={Demo}
            />
            <Route>
              <Redirect to="/demo" />
            </Route>
          </Switch>
      </div>
    </>
  );
}

export default App;
