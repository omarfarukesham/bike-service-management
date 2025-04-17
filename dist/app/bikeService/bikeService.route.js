"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bikeService_controller_1 = require("./bikeService.controller");
const router = express_1.default.Router();
router.post("/", bikeService_controller_1.BikeServiceController.createService);
router.get("/", bikeService_controller_1.BikeServiceController.getAllServices);
router.get("/:id", bikeService_controller_1.BikeServiceController.getSingleServiceFromDB);
router.put("/:id", bikeService_controller_1.BikeServiceController.updateServiceFromDB);
exports.BikeServiceRoutes = router;
