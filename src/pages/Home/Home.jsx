import { Container, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>
        Phonebook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
};

export default Home;
