import { Prisma } from "@prisma/client";
import prisma from "../../shared/prisma";


const createCustomer = async (data: any) => {   
    const { name, email, phone } = data;
    const customer = await prisma.customer.create({
        data: {
            name,
            email,
            phone,
        }
    });
    return customer;
}

const getAllCustomers = async (params: any) => {
    const { searchTerm, ...filterData } = params;
    const andConditions: Prisma.CustomerWhereInput[] = [];  
    const searchAbleFields = ['name', 'email'];
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
    const whereConditions: Prisma.CustomerWhereInput = { AND: andConditions }
    const result = await prisma.customer.findMany({
        where: whereConditions
    });
    return result;
};

const getSingleCustomerUser = async (id: string) => {
    const customer = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id
        }
    });
   
    return customer;
}

const updateCustomerUser = async (id: string, data: any) => {
    console.log('hello customer service', data)
    const customer = await prisma.customer.update({
        where: {
            customerId: id
        },
        data: {
            name: data.name,
            phone: data.phone,
        }
    });
    return customer;
}

const deleteCustomerUser = async (id: string) => {
    const customer = await prisma.customer.delete({
        where: {
            customerId: id
        }
    });
    return customer;
}


export const customerService = {
    createCustomer,
    getAllCustomers,
    getSingleCustomerUser,
    updateCustomerUser,
    deleteCustomerUser,
   
}