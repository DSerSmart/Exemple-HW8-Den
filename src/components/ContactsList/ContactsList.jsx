import { Contact } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {name} {number}
            <Button
              variant="outlined"
              onClick={() => removeContact(id)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};
