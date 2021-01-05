import React from 'react';
import useForm from './useForm';


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
        <div className='form-content-right'>
            <form onSubmit={submitRegForm} className='form'>
                <h1>Register Today!</h1> 
                <label>Name
                    <input 
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={formValues.name}
                    onChange={changeReg}
                    />
                </label>
                <div>
                    <p>{formErrors.name}</p>
                </div>
                <label>Email
                    <input 
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formValues.email}
                    onChange={changeReg}
                    />
                </label>
                <div>
                    <p>{formErrors.email}</p>
                </div>
                <label>Password
                    <input 
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formValues.password}
                    onChange={changeReg}
                    />
                </label>
                <div>
                    <p>{formErrors.password}</p>
                </div>
                <button>Sign Up</button>
                <span>Already have an account? Login <a href='#'>here</a>.</span>
            </form>
            
        </div>
    )
}