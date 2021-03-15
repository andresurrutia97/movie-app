import Home from './containers/Home';
import User from './containers/User';
import ToC from './views/ToC';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'Profile',
    component: User,
  },
  {
    path: '/toc',
    name: 'ToC',
    component: ToC,
  },
];
