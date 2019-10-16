import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    private express: express.Application

    constructor() {
        this.express = express();
        this.database();
        this.middlewares();
        this.routes();
    }   

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/usersTypescript');
    }

    private middlewares(): void {
        this.express.use(express.json());
    }
    
    private routes(): void {
        this.express.use(routes);
    }

    public getApplication(): express.Application {
        return this.express;
    }
}

export default new App().getApplication() // exportando o atributo da aplicacao