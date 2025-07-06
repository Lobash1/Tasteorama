import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, 'Too Shot!')
    .max(128, 'Too Long!')
    .email('Please enter a valid email')
    .required('Email is Required'),
  password: Yup.string()
    .min(8, 'Too Shot!')
    .max(128, 'Too Long!')
    .required('Password is Required'),
});
