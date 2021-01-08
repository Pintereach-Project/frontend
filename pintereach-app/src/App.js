import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Articles from './components/Articles'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <PrivateRoute path="/articles" component={Articles} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
