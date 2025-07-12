// controllers/admin.controller.js

import { User } from "../models/user.model.js";
import {Application} from "../models/application.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(new ApiResponse(200, users, "All users fetched"));
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) throw new ApiError(404, "User not found");
  res.status(200).json(new ApiResponse(200, {}, "User deleted"));
};

export const getAllApplications = async (req, res) => {
  const forms = await Application.find();
  res.status(200).json(new ApiResponse(200, forms, "All applications fetched"));
};

export const deleteApplication = async (req, res) => {
  const app = await Application.findByIdAndDelete(req.params.id);
  if (!app) throw new ApiError(404, "Application not found");
  res.status(200).json(new ApiResponse(200, {}, "Application deleted"));
};
