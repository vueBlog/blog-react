import Home from '@/pages/Home/Home';
import List from '@/pages/List/List';
import About from '@/pages/About/About';

const routes = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: '归档',
    path: '/list',
    component: List,
  },
  {
    name: '关于',
    path: '/about',
    component: About,
  },
];

export default routes;
