import React from 'react';
import useLoginForm from './useLoginForm';
import validate from './validateLoginInfo';
import './loginForm.css';

const Login = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useLoginForm(submitForm, validate);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Welcome back to Pintereach! Please login below.</h1>
                <div className='form-inputs'>
                    <label 
                    htmlFor='email' 
                    className='form-label'
                    >Email
                    </label>
                    <input
                    id='email'
                    type='email' 
                    name='email' 
                    className='form-input'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='password' 
                    className='form-label'
                    >Password
                    </label>
                    <input
                    id='password'
                    type='password' 
                    name='password' 
                    className='form-input'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button 
                className='form-input-btn' 
                type='submit'
                >Log In
                </button>
                <span 
                className='form-input-login'
                >Need an account? Sign up <a href='#'>here</a>
                </span>
            </form>
        </div>

    )
}

export default Login
