import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container, HeaderNav } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <HeaderNav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderNav>
    </Container>
  );
};

export default AppBar;
