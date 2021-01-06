import React from 'react';
import LoginForm from './Form-Login/loginform';
import Form from './Form-Registration/Form';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
