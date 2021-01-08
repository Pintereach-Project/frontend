import React from 'react';
import useLoginForm from './useLoginForm';
import validate from './validateLoginInfo';
import './loginForm.css';

const Login = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useLoginForm(submitForm, validate);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Welcome back to Pintereach! Please log in below.</h1>
                <div className='form-inputs'>
                    <label 
                    htmlFor='username' 
                    className='form-label'
                    >Username
                    </label>
                    <input
                    id='username'
                    type='username' 
                    name='username' 
                    className='form-input'
                    placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
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
                >Log in
                </button>
                <span 
                className='form-input-login'
                >Need an account? Register <a href='/register'>here</a>.
                </span>
            </form>
        </div>

    )
}

export default Login
