import React from 'react';
import useForm from './useForm';
import './FormReg.css';


export default function FormReg(){

    const { changeReg, formValues, submitRegForm, formErrors } = useForm();

    // const onSubmit = (evt) => {
    //     evt.preventDefault();
    //     submitReg();
    // };


    // const onChange = evt => {
    //     const { name } = evt.target;
    //     changeReg( name );
    // }

    return(
        <div className='form-container'>
            <div className='form-content-left'></div>
            <div className='form-content-right'>
            <form onSubmit={submitRegForm} className='form'>
                <h1>Register Today!</h1> 
                <div className='input-div'>
                    <label>Name</label>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={formValues.name}
                    onChange={changeReg}
                    />
                    <div>
                        <p>{formErrors.name}</p>
                    </div>
                </div>
                <div className='input-div'>
                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formValues.email}
                    onChange={changeReg}
                    />
                    <div>
                        <p>{formErrors.email}</p>
                    </div>
                </div>
                <div className='input-div'>
                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formValues.password}
                    onChange={changeReg}
                    />
                    <div>
                        <p>{formErrors.password}</p>
                    </div>
                </div>
                <button>Sign Up</button>
                <span>Already have an account? Login <a href='#'>here</a>.</span>
            </form>
            </div>
        </div>
    )
}