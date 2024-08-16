import { Request, Response } from 'express';
import { UserListAllCarsHomeService } from '../../services/car/UserListAllCarsHomeService';

class UserListAllCarsHomeController {
    async handle(req: Request, res: Response) {
        const {
            user_id, page, limit, filter
        } = req.query;

        const cars_list = new UserListAllCarsHomeService();

        const cars = await cars_list.execute(
            user_id as string,
            page as string,
            limit as string,
            filter as string
        );

        return res.json(cars);

    }

}

export { UserListAllCarsHomeController }