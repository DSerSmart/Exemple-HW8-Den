import { Field, Formik, ErrorMessage, Form } from 'formik';
import ScaleLoader from 'react-spinners/ScaleLoader';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import { selectIsAuthLoading, selectIsRefreshing } from 'redux/auth/selectors';

const values = {
  email: '',
  password: '',
};

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <>
      {!isRefreshing && (
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          validationSchema={SignInValidationSchema}
        >
          <Form>
            <label>
              Email
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="span" />
            </label>

            <label>
              Password
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="span" />
            </label>

            <button type="submit">
              {' '}
              {isAuthLoading ? (
                <ScaleLoader color="#ffffff" height={25} />
              ) : (
                <>Log In</>
              )}{' '}
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
};
