import React from 'react';
import Dashboard from './Views/Dashboard'
import Post from './Views/Post'
import UserProfile from './Views/UserProfile'


let routes = [
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
    component : ()=> <Post />,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'tim-icons icon-single-02',
    component : ()=> <UserProfile/>,
    layout: '/admin'
  }

];

export default routes;