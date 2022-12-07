import { useAuth } from 'hooks/useAuth';
import { NavigationClk, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationClk>
      <div>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      </div>
    </NavigationClk>
  );
};

export default Navigation;
