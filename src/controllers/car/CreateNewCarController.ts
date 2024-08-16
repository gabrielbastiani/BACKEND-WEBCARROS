import { Request, Response } from "express";
import { CreateNewCarService } from "../../services/car/CreateNewCarService";

class CreateNewCarController {
    async handle(req: Request, res: Response) {
        const {
            user_id,
            name,
            model_car,
            year_car,
            km_car,
            whatsapp,
            city,
            price_car,
            description_car
        } = req.body;

        const image_car_web = new CreateNewCarService();

        if (!req.files || !Array.isArray(req.files)) {
            throw new Error("Error uploading files");
        } else {
            const image_car = req.files.map((file: Express.Multer.File) => file.filename);

            const car_image = await image_car_web.execute({
                user_id,
                image_car,
                name,
                model_car,
                year_car,
                km_car,
                whatsapp,
                city,
                price_car,
                description_car
            });

            return res.json(car_image);
        }
    }
}

export { CreateNewCarController };