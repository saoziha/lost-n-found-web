import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import { Provider } from 'react-redux';
import Login from './Layouts/LoginPage/Login';
import AdminPage from './Layouts/Admin/AdminPage';
import './assets/scss/black-dashboard-react.scss';
import './assets/css/nucleo-icons.css';
const history = createBrowserHistory();
{
  /*<Provider store = {store}></Provider>*/
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {/* <Route path="/admin" render={props => <AdminPage {...props} />} />
      <Redirect from="/" to="/admin/dashboard" render={props => <AdminPage {...props} />} /> */}
      <Route path="/login" render={props => <Login {...props} />} />
      <Redirect from="/" to="/login" render={props => <Login {...props} />} />
    </Switch>
  </Router>,

  document.getElementById('root')
);
