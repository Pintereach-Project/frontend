import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import FormReg from './FormReg';
import SchemaReg from './SchemaReg';



const defaultValues = {
    username:'',
    email:'',
    password:'',
  };
  const defaultErrors = {
    username:'',
    email:'',
    password:'',
  };
  const initialUser = [];
  

export default function useForm() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState(defaultErrors);
  

  const postNewUser = (newUser) => {
      axios
      .post("https://pintereach-backend.herokuapp.com/api/auth/register", newUser)
      .then((res) => {
          console.log(res.data);
          setUser([res.data, ...user]);
          setFormValues(defaultValues);
      })
      .catch((err) => {
          console.log(err);
      });
  }

  const changeReg = (evt) => {
      const { name, value } = evt.target;
    yup
    .reach(SchemaReg, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''});
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]});
    })
    setFormValues({...formValues, [name]: value});
    
  };

  const submitRegForm = (evt) =>{
      evt.preventDefault();
    const newUser = {
      username:formValues.username,
      email:formValues.email,
      password:formValues.password,
    };
    postNewUser(newUser);
}
return ( { changeReg , formValues, submitRegForm, formErrors }); 

}
