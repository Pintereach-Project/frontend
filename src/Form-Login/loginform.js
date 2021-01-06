import React, { useState } from 'react'
import Login from './login'
import './loginForm.css'

const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className='form-container'>
            <div className='form-content-left'>
                <img className='form-img' src='img/pintereach.png' alt='logo' />
            </div>
            <Login />
            {/* THE ABOVE LINE WILL BE REMOVED ONCE THE BELOW LOGIC IS COMPLETE */}
            {/* {!isSubmitted ? <Login submitForm={submitForm} /> : TO DO - INSERT CODE TO MOVE ON TO ARTICLES AFTER LOGIN} */}
        </div>
        </>
    )
}

export default LoginForm;
