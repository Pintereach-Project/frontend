import React from 'react'
import {useForm} from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Errors = styled.span`
color:red;
font-size: 1rem;
`;

const SignUp = () => {

    const {register, handleSubmit, setValue, errors} = useForm({});

      let history = useHistory();

    const onSubmit = (user) => {
        console.log(user)
        const {username, email, phone, password} = user 
        const newUser = {username, email, phone, password}
        console.log({newUser})
        axios.post('https://pintereach-backend.herokuapp.com/', newUser)
        .then(res => {
            console.log(res.data.data[0]);
                setValue("username", "");
                setValue("email", "");
                setValue("phone", "");
                setValue("password", "")
                setValue("confirmPassword", "")
                history.push('/');
            })
        .catch(err => console.log(err))   
    } 
    
    return (
        
           <div>
               <form onSubmit = {handleSubmit(onSubmit)}>
               <header>Sign Up</header>
                    <input 
                        type="text"
                        username="username"
                        placeholder = 'Username'
                        ref={register({
                            required: 'username is required'
                        })}
                        />
                        {errors.username && <Errors>Please enter your username</Errors>}

                        <input 
                        type="email"
                        username="email"
                        placeholder = 'Email Address'
                        ref={register({
                            required: 'Email is required'
                        })}
                        />
                        {errors.email && <Errors>Please enter your email</Errors>}

                        <input 
                        type="tel"
                        username="phone"
                        placeholder = 'Phone Number'
                        ref={register({
                            required: 'Phone Number is required'
                        })}
                        />
                        {errors.username && <Errors>Please enter your phone number</Errors>}


                        <input 
                        type="password"
                        username="password"
                        placeholder = 'Password'
                        ref={register({
                            required: 'Password is required'
                        })}
                        />
                        {errors.password && <Errors>Please enter your password</Errors>}

                        <input 
                        type="password"
                        username="confirmPassword"
                        placeholder = 'Confirm Password'
                        ref={register({
                            required:true
                        })}
                        />
                        {errors.username && <Errors>Please confirm your password</Errors>}

                        <button type="submit">Sign Up</button>
                        
                            <p>Already have an account?
                                <Link classusername = 'login' to ="/"> Log in</Link>
                             </p>
                        </form>
                        </div>
        
    )
}
export default SignUp