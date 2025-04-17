import  express  from "express";
import { BikeServiceController } from "./bikeService.controller";
const router = express.Router();


router.post("/",   BikeServiceController.createService);
router.get("/",    BikeServiceController.getAllServices);
router.get("/:id", BikeServiceController.getSingleServiceFromDB);
router.put("/:id", BikeServiceController.updateServiceFromDB);


export const BikeServiceRoutes = router;