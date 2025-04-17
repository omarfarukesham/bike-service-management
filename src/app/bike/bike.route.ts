import  express  from "express";
import { BikeController } from "./bike.controller";
const router = express.Router();


router.post("/", BikeController.createBike);
router.get("/", BikeController.getAllBikes);
router.get("/:id", BikeController.getSingleBikeFromDB);
// router.put("/:id", BikeController.updateBikeFromDB);
// router.delete("/:id", BikeController.deleteBikeFromDB);


export const BikesRoutes = router;