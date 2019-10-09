import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
// import { Provider } from 'react-redux';
import AdminPage from "./Layouts/Admin/AdminPage";
import "./assets/scss/black-dashboard-react.scss";
import "./assets/css/nucleo-icons.css";

const history = createBrowserHistory();
{/*<Provider store = {store}></Provider>*/
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {/*<App />*/}
      <Route path="/admin"
             render={props => <AdminPage {...props}/>}/>
      <Redirect from="/"
                to="/admin/dashboard"
                render={props => <AdminPage {...props}/>}/>
    </Switch>
  </Router>


  , document.getElementById('root'));