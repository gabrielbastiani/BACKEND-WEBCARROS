import prismaClient from "../../prisma";

interface CarRequest {
    user_id: string;
    image_car: string[];
    name: string;
    model_car: string;
    year_car: string;
    km_car: string;
    whatsapp: string;
    city: string;
    price_car: string;
    description_car: string;
}

class CreateNewCarService {
    async execute({
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
    }: CarRequest) {
        const car = await prismaClient.car.create({
            data: {
                user_id,
                image_car: {
                    set: image_car,
                },
                name: name,
                model_car: model_car,
                year_car: year_car,
                km_car: km_car,
                whatsapp: whatsapp,
                city: city,
                price_car: price_car,
                description_car: description_car
            }
        });

        return car;
    }
}

export { CreateNewCarService };