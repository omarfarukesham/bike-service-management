"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createBikeService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceDate, description, status, bikeId } = data;
    const ServiceCreated = yield prisma_1.default.serviceRecord.create({
        data: {
            serviceDate: new Date(serviceDate),
            description,
            status: status.toLocaleUpperCase(),
            bikeId
        }
    });
    return ServiceCreated;
});
const getAllBikesService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    const searchAbleFields = ['description'];
    if (params.searchTerm) {
        andConditions.push({
            OR: searchAbleFields.map((field) => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: 'insensitive',
                }
            }))
        });
    }
    if (Object.keys(filterData).length) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        });
    }
    const whereConditions = { AND: andConditions };
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: whereConditions
    });
    return result;
});
const getSingleBikeUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Service = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
    return Service;
});
const updateBikeService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // If completionDate is provided, automatically set status to DONE
        const updateData = Object.assign(Object.assign({}, data), (data.completionDate && { status: client_1.ServiceStatus.DONE }));
        const ServiceUpdate = yield prisma_1.default.serviceRecord.update({
            where: {
                serviceId: id
            },
            data: updateData
        });
        return ServiceUpdate;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error(`Update failed: ${error.message}`);
        }
        throw error;
    }
});
exports.bikeService = {
    createBikeService,
    getAllBikesService,
    getSingleBikeUserService,
    updateBikeService,
};
