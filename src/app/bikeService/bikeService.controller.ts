import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { bikeService } from "./bikeService.service";


const createService = catchAsync(
   async (req, res) => {
      const data = req.body;
      console.log(data)
      const result = await bikeService.createBikeService(data);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Services created successfully",
         success: true,
         data: result,
      });
   }
)
const getAllServices = catchAsync(
   async (req, res) => {    
      const filters = req.query;
      const result = await bikeService.getAllBikesService(filters);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Services fetched successfully",
         success: true,
        data: result,
       

      });
   }
)


const getSingleServiceFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const result = await bikeService.getSingleBikeUserService(id);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Single Service info successfully",
         success: true,
         data: result,
      })
   }
)


const updateServiceFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const result = await bikeService.updateBikeService(id, data);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Services updated successfully",
         success: true,
         data: result,
      });
   }
)



export const BikeServiceController = {
    createService,
    getAllServices,
    getSingleServiceFromDB,
    updateServiceFromDB,

  
}