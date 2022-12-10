import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import {
  LogWrapper,
  Form,
  FormLabel,
  FormInput,
  SubmitBtn,
  LogTitle,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogWrapper>
      <LogTitle>Login, please</LogTitle>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>Email</FormLabel>
        <FormInput type="email" name="email" />
        <FormLabel>Password </FormLabel>
        <FormInput type="password" name="password" />
        <SubmitBtn type="submit">Sign in</SubmitBtn>
      </Form>
    </LogWrapper>
  );
};

export default LoginForm;
