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
  const { userDeleteId } = req.body;
  console.log("this is req.body deleteUser::", userDeleteId);
  const user = await User.findByIdAndDelete(userDeleteId);
  console.log("this is deleted User from database::", user);
  if (!user) throw new ApiError(404, "User not found");
  res.status(200).json(new ApiResponse(200, {}, "User deleted"));
});

const activeUsers = asyncHandler(async (req, res) => {
  const [user, admin] = await Promise.all([
    User.countDocuments({ role: "user" }),
    User.countDocuments({ role: "admin" }),
  ]);

  console.log("this is user::", user);
  const appliedUserEmails = await Application.distinct("email");

  if (!appliedUserEmails) {
    throw new ApiError(404, "appliedUserEmails not found");
  }

  const activeUsers = await User.countDocuments({
    email: { $in: appliedUserEmails },
  });

  const inactiveUsers = await User.countDocuments({
    email: { $nin: appliedUserEmails },
    role: { $in: "user" },
  });

  const allUsers = await User.find().select(
    " -password -verificationCode -refreshToken -verificationCodeExpiry -updatedAt -createdAt -__v -res"
  );

  if (!allUsers) {
    throw new ApiError(404, "Something wrong in fetching Users");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, "active users fetch successfully", {
        user,
        activeUsers,
        inactiveUsers,
        admin,
        allUsers,
      })
    );
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

const updateRole = asyncHandler(async (req, res) => {
  const { role, userId } = req.body;

  console.log("this is body from role::", req.body);
  console.log("this is role from role::", role);
  console.log("this is userId from role::", userId);

  if (!role || !userId) {
    throw new ApiError(
      404,
      " role and userId both are required for changing role"
    );
  }

  const updateUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: { role },
    },
    {
      new: true,
    }
  ).select(
    "-password -refreshToken -varificationCode -varificationCodeExpiry "
  );

  console.log("this is updateUser from role::", updateUser);

  if (!updateUser) throw new ApiError(404, "User not found");

  res.status(200).json(new ApiResponse(200, "User Role Updated", updateUser));
});

const totalApplications = asyncHandler(async (req, res) => {
  const [pending, approved, rejected, total] = await Promise.all([
    Application.countDocuments({ applicationStatus: "pending" }),
    Application.countDocuments({ applicationStatus: "approved" }),
    Application.countDocuments({ applicationStatus: "rejected" }),
    Application.countDocuments(),
  ]);

  if (!pending || !approved || !rejected || !total) {
    throw new ApiError(
      500,
      "something wrong in fetching pending approved rejected and total application"
    );
  }

  const applications = await Application.find();
  if (!applications) {
    throw new ApiError(404, "No Application Found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "all Applications fetch successfully", {
        pending,
        approved,
        rejected,
        total,
        applications,
      })
    );
});
const updateApplication = asyncHandler(async(req, res)=>{
  const [applicationId, applicationStatus] = req.body

  const application = await Application.findByIdAndUpdate(applicationId,
      {
      $set:{
        applicationStatus
      }
    },
    {
      new: true,
    }
  )


})
export { activeUsers, deleteUser, deleteApplication, updateRole , totalApplications, updateApplication};
