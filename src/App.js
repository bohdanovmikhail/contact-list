import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ContactList from './pages/ContactList';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Список контактов</Link>
          </li>
          <li>
            <Link to="/fields">Список полей</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contacts" exact component={ContactList} />
        <Route path="/contacts/add">
          Форма добавления контакта
        </Route>
        <Route path="/contacts/edit/:contactId">
          Форма редактирования контакта
        </Route>

        <Route path="/fields">
          Field list component
        </Route>

        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
