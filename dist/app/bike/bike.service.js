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
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { brand, model, year } = data;
    const Bike = yield prisma_1.default.bike.create({
        data: {
            brand,
            model,
            year,
            customerId: data.customerId,
        }
    });
    return Bike;
});
const getAllBikes = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    const searchAbleFields = ['brand', 'model', 'year'];
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
    const result = yield prisma_1.default.bike.findMany({
        where: whereConditions
    });
    return result;
});
const getSingleBikeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Bike = yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId: id
        }
    });
    return Bike;
});
exports.bikeService = {
    createBike,
    getAllBikes,
    getSingleBikeUser,
    // updateBikeUser,
    // deleteBikeUser,
};
