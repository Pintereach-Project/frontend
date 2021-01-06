import React from 'react';
import FormReg from './FormReg';
import AddArticle from '../Add-Article/AddArticleForm';

import { Route, Link } from 'react-router-dom';

export default function Form(){
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/add-article'>Add Articles</Link>
            </nav>
            <FormReg />
            <Route path='/add-article'>
              <AddArticle />  
            </Route>
            
        </div>
    )
}