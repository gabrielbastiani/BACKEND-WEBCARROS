import prismaClient from "../../prisma";

interface CarRequest {
    car_id: string;
}

class FindUniqueCarService {
    async execute({ car_id }: CarRequest) {
        const car = await prismaClient.car.findUnique({
            where: {
                id: car_id
            },
            include: {
                user: true
            }
        });

        return car;
    }
}

export { FindUniqueCarService }