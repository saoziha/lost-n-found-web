import Dashboard from './Views/Dashboard';
import React from 'react';
import Login from './Layouts/LoginPage/Login';

let routes = [
  {
    path: '/login',
    name: 'Login',
    icon: 'tim-icons icon-chart-pie-36',
    component: () => <Login />,
    layout: '/LoginPage'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: () => <Dashboard />,
    layout: '/admin'
  }
];

export default routes;
