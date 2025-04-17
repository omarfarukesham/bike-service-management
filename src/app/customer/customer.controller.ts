import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { customerService } from "./customer.service";


const createCustomer = catchAsync(
   async (req, res) => {
      const data = req.body;
      console.log(data)
      const result = await customerService.createCustomer(data);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Customer created successfully",
         success: true,
         data: result,
      });
   }
)
const getAllCustomers = catchAsync(
   async (req, res) => {    
      const filters = req.query;
      const result = await customerService.getAllCustomers(filters);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Customers fetched successfully",
         success: true,
        data: result,
       

      });
   }
)


const getSingleCustomerFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const result = await customerService.getSingleCustomerUser(id);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Single Customer info successfully",
         success: true,
         data: result,
      })
   }
)
const updateCustomerFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const result = await customerService.updateCustomerUser(id, data);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Customer updated successfully",
         success: true,
         data: result,
      });
   }
)
const deleteCustomerFromDB = catchAsync(
   async (req, res) => {
      const { id } = req.params;
      const result = await customerService.deleteCustomerUser(id);
      sendResponse(res, {
         statusCode: httpStatus.OK,
         message: "Customer deleted successfully",
         success: true,
         data: result,
      });
   }
)



export const CustomerController = {
   createCustomer,
   getAllCustomers,
   getSingleCustomerFromDB,
   updateCustomerFromDB,
   deleteCustomerFromDB
}