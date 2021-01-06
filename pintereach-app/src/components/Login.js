import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useForm} from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Errors = styled.span`
color:red;
`;

const Login = () => {

    const {register, handleSubmit, setValue, errors} = useForm();
    
    
    let history = useHistory();
    
    const onSubmit = (userCredentials) => {
    console.log(userCredentials);
    axiosWithAuth().post('/auth/login', userCredentials)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        if(res.data.role === 1) {
            setValue("email", "");
            setValue("password", "");
            history.push('/admin')
        }
         else if ( res.data.role === 2){
            setValue("email", "");
            setValue("password", "");
            history.push('/StudentDash')
        }
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
    