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
        const {name, email, phone, password} = user 
        const newUser = {name, email, phone, password}
        console.log({newUser})
        axios.post('https://pintereach-backend.herokuapp.com/', newUser)
        .then(res => {
            console.log(res.data.data[0]);
                setValue("name", "");
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
                        name="name"
                        placeholder = 'Name'
                        ref={register({
                            required: 'Name is required'
                        })}
                        />
                        {errors.name && <Errors>Please enter your name</Errors>}

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
                        type="tel"
                        name="phone"
                        placeholder = 'Phone Number'
                        ref={register({
                            required: 'Phone Number is required'
                        })}
                        />
                        {errors.name && <Errors>Please enter your phone number</Errors>}


                        <input 
                        type="password"
                        name="password"
                        placeholder = 'Password'
                        ref={register({
                            required: 'Password is required'
                        })}
                        />
                        {errors.password && <Errors>Please enter your password</Errors>}

                        <input 
                        type="password"
                        name="confirmPassword"
                        placeholder = 'Confirm Password'
                        ref={register({
                            required:true
                        })}
                        />
                        {errors.name && <Errors>Please confirm your password</Errors>}

                        <button type="submit">Sign Up</button>
                        
                            <p>Already have an account?
                                <Link className = 'login' to ="/"> Log in</Link>
                             </p>
                        </form>
                        </div>
        
    )
}
export default SignUp