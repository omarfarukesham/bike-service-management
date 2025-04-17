import { Prisma, ServiceStatus } from "@prisma/client";
import prisma from "../../shared/prisma";

interface CreateServiceInput {
    serviceDate: Date | string;
    description: string;
    status: ServiceStatus;
    bikeId: string;
}

const createBikeService = async (data: CreateServiceInput) => {   
    const { serviceDate, description, status, bikeId } = data;
   
    const ServiceCreated = await prisma.serviceRecord.create({
        data: {
            serviceDate: new Date(serviceDate),
            description,
            status: status.toLocaleUpperCase() as ServiceStatus,
            bikeId
        }
    });
    return ServiceCreated;
}

const getAllBikesService = async (params: any) => {
    const { searchTerm, ...filterData } = params;
    const andConditions: Prisma.ServiceRecordWhereInput[] = [];  
    const searchAbleFields = ['description'];
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
    const whereConditions: Prisma.ServiceRecordWhereInput = { AND: andConditions }
    const result = await prisma.serviceRecord.findMany({
        where: whereConditions
    });
    return result;
};

const getSingleBikeUserService = async (id: string) => {
    const Service = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
   
    return Service;
}

const updateBikeService = async (id: string, data: any) => {
    try {
        // If completionDate is provided, automatically set status to DONE
        const updateData = {
            ...data,
            ...(data.completionDate && { status: ServiceStatus.DONE }),
           
        };

        const ServiceUpdate = await prisma.serviceRecord.update({
            where: {
                serviceId: id
            },
            data: updateData
        });

        return ServiceUpdate;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw new Error(`Update failed: ${error.message}`);
        }
        throw error;
    }
}

export const bikeService = {
    createBikeService,
    getAllBikesService,
    getSingleBikeUserService,
    updateBikeService,
   
}