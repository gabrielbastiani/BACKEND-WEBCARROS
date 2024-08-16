import prismaClient from "../../prisma";

interface CarRequest {
    car_id: string;
}

class DeleteCarUserService {
    async execute({ car_id }: CarRequest) {
        const car = await prismaClient.car.delete({
            where: {
                id: car_id
            }
        });

        return car;
    }
}

export { DeleteCarUserService }