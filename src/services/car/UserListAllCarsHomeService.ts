import prismaClient from "../../prisma";

class UserListAllCarsHomeService {
    async execute(user_id: string, page: string, limit: string, filter?: string) {

        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const skip = (pageNum - 1) * limitNum;
        const take = limitNum;

        let where: any = { user_id: user_id };

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

export { UserListAllCarsHomeService }