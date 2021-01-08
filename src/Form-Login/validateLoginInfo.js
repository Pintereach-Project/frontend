export default function validateLoginInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = 'Username required'
    } else if (!/\S+@\S+\.\S+/.test(values.username)) {
        errors.username = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be 6 characters or more';
      }

      return errors;
}