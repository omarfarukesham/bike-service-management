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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const bike_service_1 = require("./bike.service");
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    const result = yield bike_service_1.bikeService.createBike(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Bike created successfully",
        success: true,
        data: result,
    });
}));
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    const result = yield bike_service_1.bikeService.getAllBikes(filters);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Bike fetched successfully",
        success: true,
        data: result,
    });
}));
const getSingleBikeFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bike_service_1.bikeService.getSingleBikeUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Single Bike info successfully",
        success: true,
        data: result,
    });
}));
// const updateBikeFromDB = catchAsync(
//    async (req, res) => {
//       const { id } = req.params;
//       const data = req.body;
//       const result = await bikeService.updateBike(id, data);
//       sendResponse(res, {
//          statusCode: httpStatus.OK,
//          message: "Bike updated successfully",
//          success: true,
//          data: result,
//       });
//    }
// )
// const deleteBikeFromDB = catchAsync(
//    async (req, res) => {
//       const { id } = req.params;
//       const result = await bikeService.deleteBike(id);
//       sendResponse(res, {
//          statusCode: httpStatus.OK,
//          message: "Bike deleted successfully",
//          success: true,
//          data: result,
//       });
//    }
// )
exports.BikeController = {
    createBike,
    getAllBikes,
    getSingleBikeFromDB,
    //    updateBikeFromDB,
    //    deleteBikeFromDB
};
