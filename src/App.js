import React from 'react';
import LoginForm from './loginform';
import Form from './Form-Registration/Form';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>

      </nav>
      {/* to do - route to sign up and login*/}
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/register'>
        <Form />
      </Route>
      
    </div>
  );
}

export default App;
