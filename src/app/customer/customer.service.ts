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



export const customerService = {
    createCustomer,
    getAllCustomers,
    // getSingleCustomerUser,
    // updateCustomerUser,
    // deleteCustomerUser,
    // softDeleteCustomerUser,
    // getAllCustomers,
    // getSingleCustomerUser,
}