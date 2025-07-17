
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
  const {userDeleteId} = req.body
  console.log("this is req.body deleteUser::", userDeleteId)
  const user = await User.findByIdAndDelete(userDeleteId);
  console.log("this is deleted User from database::", user)
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
  


  const inactiveUsers = await User.countDocuments({
    email: {$nin : appliedUserEmails},
    role : {$in: "user"}
  })
  
  if(!inactiveUsers){
    throw new ApiError(404, "inactive users not found")
  }
  
  const allUsers = await User.find().select(" -password -verificationCode -refreshToken -verificationCodeExpiry -updatedAt -createdAt -__v -res")

  if (!allUsers){
    throw new ApiError(404, "Something wrong in fetching Users")
  }
  res
    .status(200)
    .json(new ApiResponse(200, "active users fetch successfully", {user, activeUsers, inactiveUsers, admin , allUsers }));
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

const updateRole = asyncHandler(async (req, res)=>{
  const {role, userId} =req.body

  const updateUser = User.findByIdAndUpdate(userId,
    {
      $set:{role}
    },
    {
      new: true,
    }
  ).select("-password -refreshToken -varificationCode -varificationCodeExpiry -updatedAt -createdAt -__v ")

   if (!updateUser) throw new ApiError(404, "User not found");
   
  res.status(200).json(new ApiResponse(200, "User Role Updated", updateUser));
})

export {activeUsers, deleteUser, deleteApplication, updateRole}