import MainComponent from './components/main';
import IndexComponent from './components/index';
import AboutComponent from './components/about';

const routes = {
    path: '',
    component: MainComponent,
    childRoutes: [
        {
            path: '/',
            component: IndexComponent
        },
        {
            path: '/about',
            component: AboutComponent
        }
    ]
};

export { routes };
