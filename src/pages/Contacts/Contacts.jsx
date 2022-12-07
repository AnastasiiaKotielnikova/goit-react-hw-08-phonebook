import { Container, Title, SubTitle } from 'components/App/App.styled';
import ContactForm from 'components/ContactForm';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage />}
      {contacts.length > 0 && !isLoading && (
        <div>
          <SubTitle>Contacts:</SubTitle>
          <Filter />
          <PhoneBook />
        </div>
      )}
    </Container>
  );
};

export default Contacts;
