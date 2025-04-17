"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const customer_controller_1 = require("./customer.controller");
// const checkingFun =()=>{
//     console.log('hi')
//     next()
// }
router.post("/", customer_controller_1.CustomerController.createCustomer);
router.get("/", customer_controller_1.CustomerController.getAllCustomers);
router.get("/:id", customer_controller_1.CustomerController.getSingleCustomerFromDB);
router.put("/:id", customer_controller_1.CustomerController.updateCustomerFromDB);
router.delete("/:id", customer_controller_1.CustomerController.deleteCustomerFromDB);
exports.CustomerRoutes = router;
