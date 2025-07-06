import { Formik, Form, Field, ErrorMessage } from 'formik';

import css from './RegisterForm.module.css';
import { useId } from 'react';
import { validationSchema } from './validationSchema.js';

export default function RegisterForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <section className={`container ${css.container}`}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Register</h2>
        <p className={css.text}>
          Join our community of culinary enthusiasts, save your favorite
          recipes, and share your cooking creations
        </p>

        <Formik
          initialValues={{
            email: '',
            username: '',
            password1: '',
            password2: '',
            agree: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={css.form}>
            <label className={css.label} htmlFor={emailFieldId}>
              Enter your email address
            </label>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="email@gmail.com"
              id={emailFieldId}
            />
            <ErrorMessage name="email" component="div" className={css.error} />

            <label className={css.label} htmlFor={nameFieldId}>
              Enter your name
            </label>
            <Field
              className={css.field}
              type="text"
              name="username"
              placeholder="Max"
              id={nameFieldId}
            />
            <ErrorMessage
              name="username"
              component="div"
              className={css.error}
            />

            <div className={css.passwordWrapper}>
              <label className={css.label} htmlFor="password1">
                Create a strong password
              </label>
              <Field
                className={css.field}
                type="password"
                name="password1"
                placeholder="********"
                id="password1"
              />
              <ErrorMessage
                name="password1"
                component="div"
                className={css.error}
              />

              <label className={css.label} htmlFor="password2">
                Repeat your password
              </label>
              <Field
                className={css.field}
                type="password"
                name="password2"
                placeholder="********"
                id="password2"
              />
              <ErrorMessage
                name="password2"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.checkboxContainer}>
              <label className={css.checkboxWrapper}>
                <Field
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className={css.checkboxInput}
                />
                <span className={css.customCheckbox}></span>
                <span className={css.customCheckboxText}>
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
              <ErrorMessage
                name="agree"
                component="div"
                className={css.error}
              />
            </div>

            <button className={css.button} type="submit">
              Create account
            </button>
            <div className={css.redirect}>
              <p>
                {' '}
                Already have an account? Log in
                {/* <Link className={css.redirectLink}</Link> */}
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
