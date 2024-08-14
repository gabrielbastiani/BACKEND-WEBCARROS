import { Request, Response } from 'express';
import { ListAllCarsHomeService } from '../../services/car/ListAllCarsHomeService';

class ListAllCarsHomeController {
    async handle(req: Request, res: Response) {
        const {
            page, limit, filter
        } = req.query;

        const cars_list = new ListAllCarsHomeService();

        const cars = await cars_list.execute(
            page as string,
            limit as string,
            filter as string
        );

        return res.json(cars);

    }

}

export { ListAllCarsHomeController }