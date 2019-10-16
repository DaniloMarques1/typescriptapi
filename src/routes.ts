import { Router } from 'express';
import UserController from './controllers/UserController';


const routes = Router();

//USER ROUTES
routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.destroy);


export default routes;
