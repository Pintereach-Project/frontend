import React from 'react';
import LoginForm from './Form-Login/loginform';
import Form from './Form-Registration/Form';
import AddArticleForm from './Add-Article/AddArticleForm';
import Articles from './Articles/Articles';
import SavedArticles from './Saved-Articles/SavedArticles';


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
      <Route path='/addarticle'>
        <AddArticleForm />  
      </Route>
      <Route path='/saved-articles'>
              <SavedArticles />  
      </Route>
      <Route path='/articles'>
              <Articles />  
      </Route>
    </div>
  );
}

export default App;
