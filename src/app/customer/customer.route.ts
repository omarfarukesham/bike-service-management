import  express  from "express";
const router = express.Router();

import { CustomerController } from "./customer.controller";

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomers);
// router.get("/:id", AdminController.getSingleAdminFromDB);
// router.patch("/:id", validateRequest(AdminValidation.update), AdminController.updateAdminFromDB);
// router.delete("/:id", AdminController.deleteAdminFromDB);
// router.delete("/soft/:id", AdminController.softDeleteAdminFromDB);


export const CustomerRoutes = router;