import { Link, NavLink, useHistory } from 'react-router-dom';

function Header(props) {
  const { user, setUser, setIsDarkModeEnabled, isDarkModeEnabled } = props;
  const history = useHistory();

  function logOut() {
    setUser(null);
  }

  function toggleDarkMode() {
    if (isDarkModeEnabled) {
      setIsDarkModeEnabled(false);
      localStorage.setItem('darkMode', false);
    } else {
      setIsDarkModeEnabled(true);
      localStorage.setItem('darkMode', true);
    }
  }

  return (
    <header className="p-4 border-2 border-solid border-black dark:border-white mb-4 rounded-md">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/product/1/hatice">Product 1</NavLink>
        <NavLink to="/product/2/ahmet">Product 2</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <span onClick={() => history.goBack()}>Önceki Sayfa</span>
        {user ? (
          <Link to="/login" onClick={logOut}>
            Logout {user.email}
          </Link>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        <button
          onClick={toggleDarkMode}
          className="bg-black text-white px-1 py-0 rounded-md"
        >
          Dark Mode {isDarkModeEnabled ? 'Kapa' : 'Aç'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
