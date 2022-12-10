import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </div>
  );
};

export default AuthNav;
