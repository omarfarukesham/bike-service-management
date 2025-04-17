import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { bikeService } from "./bike.service";


const createBike = catchAsync(
   async (req, res) => {
      const data = req.body;
      console.log(data)
      const result = await bikeService.createBike(data);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Bike created successfully",
         success: true,
         data: result,
      });
   }
)
const getAllBikes = catchAsync(
   async (req, res) => {    
      const filters = req.query;
      const result = await bikeService.getAllBikes(filters);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Bike fetched successfully",
         success: true,
        data: result,
       

      });
   }
)


const getSingleBikeFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const result = await bikeService.getSingleBikeUser(id);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Single Bike info successfully",
         success: true,
         data: result,
      })
   }
)


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



export const BikeController = {
   createBike,
   getAllBikes,
   getSingleBikeFromDB,
//    updateBikeFromDB,
//    deleteBikeFromDB
  
}