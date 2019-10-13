import React from 'react';
import Dashboard from './Views/Dashboard';
import Post from './Views/Post';
import UserProfile from './Views/UserProfile';
import Login from './Layouts/LoginPage/Login';
import Detail from './Component/Detail/Detail';
// import Login from './Layouts/LoginPage/Login';

let routes = [
  // {
  //   path: '/login',
  //   name: 'Login',
  //   icon: 'tim-icons icon-chart-pie-36',
  //   component: () => <Login />,
  //   layout: '/LoginPage'
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-notes',
    component: () => <Dashboard />,
    layout: '/admin'
  },
  {
    path: '/post',
    name: 'Post',
    icon: 'tim-icons icon-send',
    component: () => <Post />,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'tim-icons icon-single-02',
    component: () => <UserProfile />,
    layout: '/admin'
  },
  {
    path: '/detail',
    name: 'Detail',
    icon: 'tim-icons icon-notes',
    component: () => <Dashboard />,
    layout: '/admin'
  }
  // {
  //   path: '/login',
  //   name: 'Login',
  //   icon: 'tim-icons icon-single-02',
  //   component: () => <Login />,
  //   layout: '/login'
  // }
];

export default routes;
