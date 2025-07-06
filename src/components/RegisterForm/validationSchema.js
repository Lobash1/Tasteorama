import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, 'Too Shot!')
    .max(128, 'Too Long!')
    .email('Please enter a valid email')
    .required('Email is Required'),
  username: Yup.string()
    .min(2, 'Too Shot!')
    .max(16, 'Too Long!')
    .required('Name is Required'),
  password1: Yup.string()
    .min(8, 'Too Shot!')
    .max(128, 'Too Long!')
    .required('Password is Required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
    .required('Please confirm your password'),

  //   checkPassword: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .required('Please confirm your password'),

  agree: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});
