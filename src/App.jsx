import './App.css';
import { Route, Switch } from 'react-router-dom';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import { useLocalStorage } from './hooks/useLocalStorage';
import Contact from './components/Contact';

function App() {
  const [user, setUser] = useState();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage(
    'darkMode',
    false
  );

  return (
    <div
      className={
        (isDarkModeEnabled ? 'dark' : null) +
        ' text-white bg-slate-100 w-screen h-screen'
      }
    >
      <div className="dark:bg-slate-800 h-screen p-4 text-black dark:text-white">
        <Header
          user={user}
          setUser={setUser}
          setIsDarkModeEnabled={setIsDarkModeEnabled}
          isDarkModeEnabled={isDarkModeEnabled}
        />
        <Switch>
          <Route exact path="/">
            <p>Main Page</p>
          </Route>
          <Route path="/product/:id/:name">
            <Product />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
