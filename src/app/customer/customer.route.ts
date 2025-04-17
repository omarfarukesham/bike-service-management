import  express  from "express";
const router = express.Router();

import { CustomerController } from "./customer.controller";


// const checkingFun =()=>{
//     console.log('hi')
//     next()
// }

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomers);
router.get("/:id", CustomerController.getSingleCustomerFromDB);
router.put("/:id", CustomerController.updateCustomerFromDB);
router.delete("/:id", CustomerController.deleteCustomerFromDB);


export const CustomerRoutes = router;