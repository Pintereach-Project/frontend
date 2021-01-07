import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialValues = {
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
  const [values, setValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState(defaultErrors);
  
  const postNewArticle = (newArticle) => {
    axios
    .post("https://reqres.in/api/users", newArticle)
    .then((res) => {
        setArticles([...articles, newArticle]);
        setValues(initialValues);
    })
    .catch((err) => {
        console.log(err);
    });
}
  const changeArticle = (evt) => {
      const { name, value } = evt.target;
      setValues({...values, [name]: value});
    
  };

  const submitArticle = (evt) =>{
      evt.preventDefault();
    const newArticle = {
        articleName:values.articleName,
        articleURL:values.articleURL,
        category:values.category,
        rating:values.rating
    };
    postNewArticle(newArticle);
}
return ( { changeArticle , values, submitArticle }); 

}