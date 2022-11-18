import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Phonebook</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/contacts">My Contacts</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
