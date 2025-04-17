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
exports.CustomerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const customer_service_1 = require("./customer.service");
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    const result = yield customer_service_1.customerService.createCustomer(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Customer created successfully",
        success: true,
        data: result,
    });
}));
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    const result = yield customer_service_1.customerService.getAllCustomers(filters);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Customers fetched successfully",
        success: true,
        data: result,
    });
}));
const getSingleCustomerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.getSingleCustomerUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Single Customer info successfully",
        success: true,
        data: result,
    });
}));
const updateCustomerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield customer_service_1.customerService.updateCustomerUser(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Customer updated successfully",
        success: true,
        data: result,
    });
}));
const deleteCustomerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.customerService.deleteCustomerUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Customer deleted successfully",
        success: true,
        data: result,
    });
}));
exports.CustomerController = {
    createCustomer,
    getAllCustomers,
    getSingleCustomerFromDB,
    updateCustomerFromDB,
    deleteCustomerFromDB
};
