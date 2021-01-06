import React from 'react';
import LoginForm from './loginform';
import Form from './Form-Registration/Form';
import AddArticle from './Add-Article/AddArticleForm';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/add-article'>Add Articles</Link>
      </nav>
      {/* to do - route to sign up and login*/}
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/register'>
        <Form />
      </Route>
      <Route path='/add-article'>
              <AddArticle />  
      </Route>
      
    </div>
  );
}

export default App;
