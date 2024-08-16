import prismaClient from "../../prisma";
import fs from 'fs';
import path from 'path';

interface CarRequest {
    car_id: string;
}

class DeleteCarUserService {
    async execute({ car_id }: CarRequest) {
        // Busca o carro no banco de dados para pegar os nomes dos arquivos de imagem
        const car = await prismaClient.car.findUnique({
            where: {
                id: car_id
            }
        });

        if (!car) {
            throw new Error("Carro não encontrado.");
        }

        // Extrai os nomes dos arquivos de imagem do campo image_car
        let imagePaths: string[] = [];
        if (car.image_car) {
            if (typeof car.image_car === 'string') {
                // Se for uma string, fazer o parse
                try {
                    const imageCarJson = JSON.parse(car.image_car);
                    imagePaths = imageCarJson.set as string[];
                } catch (error) {
                    console.error('Erro ao fazer o parse do campo image_car:', error);
                }
            } else if (typeof car.image_car === 'object' && 'set' in car.image_car) {
                // Se já for um objeto, acessa diretamente a propriedade 'set'
                imagePaths = car.image_car.set as string[];
            }
        }

        // Deleta os arquivos de imagem correspondentes
        imagePaths.forEach(imageName => {
            const imagePath = path.join(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageName);
            console.log(`Tentando deletar o arquivo: ${imagePath}`);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(`Erro ao deletar o arquivo ${imageName}:`, err);
                } else {
                    console.log(`Arquivo deletado com sucesso: ${imagePath}`);
                }
            });
        });

        const deletedCar = await prismaClient.car.delete({
            where: {
                id: car_id
            }
        });

        return deletedCar;
    }
}

export { DeleteCarUserService }