"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../customer/customer.route");
const bike_route_1 = require("../bike/bike.route");
const bikeService_route_1 = require("../bikeService/bikeService.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: customer_route_1.CustomerRoutes
    },
    {
        path: '/bikes',
        route: bike_route_1.BikesRoutes
    },
    {
        path: '/services',
        route: bikeService_route_1.BikeServiceRoutes
    }
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
