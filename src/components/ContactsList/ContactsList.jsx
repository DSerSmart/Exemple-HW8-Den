import { Contact } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id}>
            {name} {phone}
            <button onClick={() => removeContact(id)}>Delete</button>
          </Contact>
        );
      })}
    </ul>
  );
};
