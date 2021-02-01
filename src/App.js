import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Todo from './components/ToDoList';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profile">Profil</NavLink></li>
          <li><NavLink to="/todolist">TodoList</NavLink></li>
        </ul>
        <Switch>
          <Route path="/profile/:username" component={Profile}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/todolist" component={Todo}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
