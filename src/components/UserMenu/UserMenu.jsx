import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { StyledBtn, Container } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledBtn>
    </Container>
  );
};

export default UserMenu;
