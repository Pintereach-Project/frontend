import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useForm} from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Errors = styled.span`
color:red;
font-size: 1rem;
`;

const Login = () => {

    const {register, handleSubmit, setValue, errors} = useForm();
    
    
    let history = useHistory();
    
    const onSubmit = (userCredentials) => {
    console.log(userCredentials);
    axiosWithAuth().post('https://pintereach-backend.herokuapp.com/auth/login', userCredentials)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        
            setValue("username", "");
            setValue("password", "");
            history.push('/logged-in')
    
        
    })
    .catch(err => console.log(err))
    }; 
    
    
    return (
    
           <form onSubmit = {handleSubmit(onSubmit)}>
           <header>Log in</header>
                    <input  
                    type="email"
                    name="email"
                    placeholder = 'Email Address'
                    ref={register({
                        required: 'Email is required'
                    })}
                    />
                    {errors.email && <Errors>Please enter your email</Errors>}
    
                
                    <input 
                    type="password"
                    name="password"
                    placeholder = 'Password'
                    ref={register({
                        required: 'Password is required'
                    })}
                    />
                    {errors.password && <Errors>Please enter your password</Errors>}
    
                    <button type="submit">Log in</button>
                    <Link className = 'signUp' to="/sign-up">Sign Up </Link><span className = 'signUp'>| Forgot Password</span>
                    </form>
                   
    )
    }
    
    export default Login
    