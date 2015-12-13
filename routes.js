import MainComponent from './components/main';
import IndexComponent from './components/index';

const routes = {
    path: '',
    component: MainComponent,
    childRoutes: [
        {
            path: '/',
            component: IndexComponent
        }
    ]
};

export { routes };
