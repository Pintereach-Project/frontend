import { useState, useEffect } from 'react';

const useLoginForm = (callback, validate) => {
    const [values, setValues] = useState({
        email:'',
        password:''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        isSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },[errors]);

    return { handleChange, values, handleSubmit, errors };
};

export default useLoginForm;