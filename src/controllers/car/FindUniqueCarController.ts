import { Request, Response } from 'express';
import { FindUniqueCarService } from '../../services/car/FindUniqueCarService';

class FindUniqueCarController {
  async handle(req: Request, res: Response) {

    const car_id = req.query.car_id as string;

    const carHome = new FindUniqueCarService();

    const car = await carHome.execute({ car_id });

    return res.json(car);

  }
}

export { FindUniqueCarController }