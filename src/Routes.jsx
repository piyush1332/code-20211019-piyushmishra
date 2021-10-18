import React from 'react';
import Dashboard from './Pages/Dashboard';
import CarDetail from './Pages/CarDetail';
import { Route , Switch } from 'react-router';

function Routes() {
  return (
    <>
        <Switch>
            <Route exact path="/" >
                <Dashboard />
            </Route>
            <Route path="/details/:id" >
                <CarDetail />
            </Route>
        </Switch>
    </>
  );
}

export default Routes;
