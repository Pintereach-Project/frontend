import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const values = {
    articleName:'',
    articleURL:'',
    category:'',
    rating:''
  };
//   const defaultErrors = {
//     articleName:'',
//     articleURL:'',
//     category:'',
//     rating:''
//   };
  const initialArticles = [];
  

export default function useArticleForm() {
  const [articles, setArticles] = useState(initialArticles);
  const [values, setValues] = useState(values);
//   const [formErrors, setFormErrors] = useState(defaultErrors);
  

  const change = (evt) => {
      const { name, value } = evt.target;
      setValues({...values, [name]: value});
    
  };

  const submit = (evt) =>{
      evt.preventDefault();
    const newArticle = {
        articleName:values.articleName,
        articleURL:values.articleURL,
        category:values.category,
        rating:values.rating
    };
    setArticles([...articles, newArticle]);
    setValues(values);
}
return ( { change , values, submit }); 

}