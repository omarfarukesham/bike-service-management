import { Prisma } from "@prisma/client";
import prisma from "../../shared/prisma";


const createBike = async (data: any) => {   
    const { brand, model, year } = data;
    const Bike = await prisma.bike.create({
        data: {
            brand,
            model,
            year, 
            customerId: data.customerId,
        }
    });
    return Bike;
}

const getAllBikes = async (params: any) => {
    const { searchTerm, ...filterData } = params;
    const andConditions: Prisma.BikeWhereInput[] = [];  
    const searchAbleFields = ['brand', 'model','year'];
    if (params.searchTerm) {
        andConditions.push({
            OR: searchAbleFields.map((field) => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: 'insensitive',
                }
            }))
        },)
    }
    if (Object.keys(filterData).length) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        })
    }
    const whereConditions: Prisma.BikeWhereInput = { AND: andConditions }
    const result = await prisma.bike.findMany({
        where: whereConditions
    });
    return result;
};

const getSingleBikeUser = async (id: string) => {
    const Bike = await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id
        }
    });
   
    return Bike;
}

export const bikeService = {
    createBike,
    getAllBikes,
    getSingleBikeUser,
    // updateBikeUser,
    // deleteBikeUser,
   
}