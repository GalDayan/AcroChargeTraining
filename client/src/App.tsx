import React from 'react';
import Transactions from './pages/Transactions';
import Navbar from './containers/Navbar';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Transactions} />
            <Route path="/customer/:id" component={CustomerDetails} />
          </Switch>
      </div>
    </>
  );
}

export default App;
