import Dashboard from './Views/Dashboard'
import React from 'react';


let routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: () => <Dashboard />,
    layout: '/admin'
  }
];

export default routes;