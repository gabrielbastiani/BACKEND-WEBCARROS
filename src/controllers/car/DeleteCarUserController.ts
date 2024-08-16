import { Request, Response } from 'express';
import { DeleteCarUserService } from '../../services/car/DeleteCarUserService'; 

class DeleteCarUserController {
  async handle(req: Request, res: Response) {

    const car_id = req.query.car_id as string;

    const carsUsers = new DeleteCarUserService();

    const car = await carsUsers.execute({ car_id });

    return res.json(car);

  }
}

export { DeleteCarUserController }