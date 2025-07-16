
import { User } from "../models/user.model.js";
import { Application } from "../models/application.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// const getAllUsers = asyncHandler(async (req, res) => {
//   role = "user";
//   const users = await User.find({ role }).select("-password");
//   res.status(200).json(new ApiResponse(200, users, "All users fetched"));
// });

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) throw new ApiError(404, "User not found");
  res.status(200).json(new ApiResponse(200, {}, "User deleted"));
});

const activeUsers = asyncHandler(async (req, res) => {
  
  const [user, admin] = await Promise.all([
    User.countDocuments({role: "user"}),
    User.countDocuments({role: "admin"})
  ])
  
  const appliedUserEmails = await Application.distinct("email")
   
  if(!appliedUserEmails){
    throw new ApiError(404, "appliedUserEmails not found")
  }

  const activeUsers = await User.countDocuments({
    email : {$in : appliedUserEmails},
  })
  
  if(!activeUsers){
    throw new ApiError(404, "active users not found")
  }

  const inactiveUsers = await User.countDocuments({
    email: {$nin : appliedUserEmails},
    role : {$in: "user"}
  })
  
  if(!inactiveUsers){
    throw new ApiError(404, "inactive users not found")
  }
  res
    .status(200)
    .json(new ApiResponse(200, "active users fetch successfully", {user, activeUsers, inactiveUsers, admin }));
});

// const totalAdmins =asyncHandler(async()=>{
  
//   const role = "admin";

//   const admin = User.find({role});
   
//   if(admin){
//     res.status(200).json(new ApiResponse(200, "Total admins " , admin))
//   }

//   res.status(200).json(new ApiResponse(200,"no Admin found", {}))
// })



// const getAllApplications = asyncHandler(async (req, res) => {
//   const forms = await Application.find();
//   res.status(200).json(new ApiResponse(200, forms, "All applications fetched"));
// });

const deleteApplication = asyncHandler(async (req, res) => {
  const app = await Application.findByIdAndDelete(req.params.id);
  if (!app) throw new ApiError(404, "Application not found");
  res.status(200).json(new ApiResponse(200, "Application deleted", {}));
});

export {activeUsers, deleteUser, deleteApplication}