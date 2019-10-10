import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdminPage from './Layouts/Admin/AdminPage';
import './assets/scss/black-dashboard-react.scss';
import './assets/css/nucleo-icons.css';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {/*<App />*/}
        <Route path="/admin" render={props => <AdminPage {...props} />} />
        <Redirect from="/" to="/admin/dashboard" render={props => <AdminPage {...props} />} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root')
);
