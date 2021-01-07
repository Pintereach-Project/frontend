import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required('Name is required'),
    email: yup
    .string()
    .email("must be an email")
    .required("email is required"),
    password: yup
    .string()
    .required('password is required')
    .min(6, 'at least 6 characters are required'),
});