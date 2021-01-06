import React from 'react';
import LoginForm from './loginform';
import Form from './Form-Registration/Form';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      {/* to do - route to sign up and login*/}
      <LoginForm />
      <Form />
    </div>
  );
}

export default App;
