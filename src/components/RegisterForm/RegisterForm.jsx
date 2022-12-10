import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  RegWrapper,
  RegTitle,
  FormRegister,
  LabelRegister,
  InputRegister,
  BtnRegister,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <RegWrapper>
      <RegTitle>Have no account? Sign up!</RegTitle>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelRegister>Username </LabelRegister>
        <InputRegister type="text" name="name" />

        <LabelRegister>Email</LabelRegister>
        <InputRegister type="email" name="email" />

        <LabelRegister>Password</LabelRegister>
        <InputRegister type="password" name="password" />

        <BtnRegister type="submit">Sign up</BtnRegister>
      </FormRegister>
    </RegWrapper>
  );
};

export default RegisterForm;
