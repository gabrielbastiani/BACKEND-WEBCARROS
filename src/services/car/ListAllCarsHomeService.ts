import prismaClient from "../../prisma";

class ListAllCarsHomeService {
    async execute(page: string, limit: string, filter?: string) {

        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const skip = (pageNum - 1) * limitNum;
        const take = limitNum;

        let where: any = {};

        if (filter) {
            where.OR = [
                { name: { contains: filter, mode: 'insensitive' } }
            ];
        }

        const cars = await prismaClient.car.findMany({
            where: where,
            skip: skip,
            take: take,
            orderBy: {
                created_at: 'desc'
            }
        });

        const total_cars = await prismaClient.car.count({ where: where });

        const data = {
            totalPages: Math.ceil(total_cars / take),
            currentPage: parseInt(page),
            cars: cars,
        }

        return data;

    }
}

export { ListAllCarsHomeService }