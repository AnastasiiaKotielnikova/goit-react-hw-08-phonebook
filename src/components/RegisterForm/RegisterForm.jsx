import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  FormRegister,
  LabelRegister,
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
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister>
        Username
        <input type="text" name="name" />
      </LabelRegister>
      <LabelRegister>
        Email
        <input type="email" name="email" />
      </LabelRegister>
      <LabelRegister>
        Password
        <input type="password" name="password" />
      </LabelRegister>
      <BtnRegister type="submit">Register</BtnRegister>
    </FormRegister>
  );
};

export default RegisterForm;
