import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token = req.headers.cookie?.split(";") || [];
    const tokens = token.find((c) => c.trim().startsWith("accessToken="));
    const acessToken = tokens && tokens.split("=")[1];
    const accessToken = req.cookies?.accessToken || acessToken;

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    let decodeToken;
    try {
      decodeToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      throw new ApiError(401, "Invalid or expired access token");
    }

    const user = await User.findById(decodeToken._id)?.select(
      "-password -__v -createdAt -updatedAt -refreshToken -verificationCode -verificationCodeExpiry -emailVerified -googleId "
    );
    if (!user) {
      //TODE Discussion about frontend
      throw new ApiError(401, "invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || " invalid access Token request");
  }
});

export { verifyJWT };
