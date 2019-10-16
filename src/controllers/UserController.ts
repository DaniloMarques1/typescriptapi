import UserModel from '../models/UserModel'
import { Request, Response } from 'express'

class UserController {
    public static async index(req: Request, res: Response) {
        const users = await UserModel.find();
        return res.json(users);
    }

    public static async store(req: Request, res: Response) {
        const { name, email } = req.body;

        const user = await UserModel.create({
            name,
            email
        });

        return res.json(user);
    }

    public static async show(req: Request, res: Response) {
        const {id } = req.params;
        const user = await UserModel.findById(id);

        return res.json(user);
    }

    public static async destroy(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id)
        const user = await UserModel.findByIdAndDelete(id);

        return res.json(user);
    }
}

export default UserController