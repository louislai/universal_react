import express from 'express';
import http from 'http';

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

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render('index');
});

const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
    console.log('Listening on port 3003');
});
