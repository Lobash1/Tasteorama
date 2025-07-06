import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
// import { useId } from 'react';
import css from './LoginForm.module.css';
import { validationSchema } from './validationSchema.js';

export default function LoginForm() {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  //   const handleChange = evt => {
  //     setValues({
  //       ...values,
  //       [evt.target.name]: evt.target.value,
  //     });
  //   };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <section className={`container ${css.container}`}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Login</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>Enter your email address</label>
            <Field
              className={css.input}
              id="email"
              type="email"
              name="email"
              placeholder="email@gmail.com"
            />
            <ErrorMessage name="email" component="div" className={css.error} />

            <label className={css.label} htmlFor="password1">
              Create a strong password
            </label>
            <Field
              id="password"
              className={css.input}
              type="password"
              name="password"
              placeholder="********"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />

            <button className={css.btn} type="submit">
              Login
            </button>

            <div className={css.redirect}>
              <p>
                {' '}
                Don’t have an account?
                {/* <Link className={css.redirectLink}</Link> */}
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
