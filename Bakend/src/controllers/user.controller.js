import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  jwt from 'jsonwebtoken';
import { sendVerificationCode } from "../utils/sendEmail.js";


const generateAcessAndRefreshtoken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
     
    user.refreshToken = refreshToken
 
   await user.save({ validateBeforeSave : false})
   return { accessToken, refreshToken }


  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get  user data
  // validation- not empty
  //check if user already exist: email, username
  // check for avatar, check for image
  //upload them to cloudnary
  // create user object create entery in db
  //remove password and refreshtoken fields response
  //check for user creation
  // return response

  const { email, userName, fullName, password } = req.body;
  console.log(req.body);

  if (
    [email, userName, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are mendantory");
  }
  const userExisted = await User.findOne({
    $or: [{ email }, { userName }],
  });
  if (userExisted) {
    throw new ApiError(409, "user already exist");
  }


  let avatarLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalPath = req.files.avatar[0].path;
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  const userCreation = await User.create({
    email,
    fullName,
    userName: userName?.toLowerCase(),
    avatar: avatar?.url || "",
    varificationCode: code,
    varificationCodeExpiry: Date.now() + 10 * 60 * 1000,
    password,
  });

   await sendVerificationCode(email, code);

  console.log("userCreation: ", userCreation);

  const createdUser = await User.findById(userCreation._id).select(
    " -password -refreshToken -varificationCode -varificationCodeExpiry -googleId -emailVerified"
  );
  console.log("created user is : ", createdUser);

  if (!createdUser) {
    throw new ApiError(500, "something went wrong in creation of user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, {}, " Send verification code successfully"));
});

const verifyEmailCode =  asyncHandler(async (req, res)=> {
 const { email, code } = req.body;

 const user = await User.findOne({email});

  if (!user || user.verificationCode !== code || Date.now() > user.verificationCodeExpiry) {
    throw new ApiError(400, "Invalid or expired verification code");
  }
  user.emailVerified = true;
  user.verificationCode = null;
  user.verificationCodeExpiry = null;

  await user.save();
  
  res.status(200).json(new ApiResponse(200, {}, "Email verified successfully"));

})

const loginUser = asyncHandler(async (req, res) => {
  // get data from request body
  // username or email base
  // check user exist or not
  // if user exist then check password
  // if password is correct
  // then return user data with access token and refresh token

  const { email, userName, password } = req.body;

  if (!email && !userName) {
    throw new ApiError(400, "username or email is required");
  }

  // check user exist or not
  const user = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // compare password
  const correctPassword = await user.isPasswordCorrect(password);

  if (!correctPassword) {
    throw new ApiError(401, "password incorrect");
  }

 const {refreshToken, accessToken} = await generateAcessAndRefreshtoken(user._id)

const loggedInUser = await User.findById(user._id).select(
   "-password -refreshToken -varificationCode -varificationCodeExpiry -googleId -emailVerified"
)

const option = {
   httpOnly : true,
   secure : true,
}

res.status(200)
.cookie("accessToken", accessToken, option)
.cookie("refreshToken", refreshToken, option)
.json(
   new ApiResponse(200, {
    user: loggedInUser,
    accessToken,
    refreshToken
   },
   "User login in successfully"  
   )
)

});

const logoutUser = asyncHandler(async(req, res)=>{
  
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset:{
        refreshToken: 1,
      }
    },
    {
      new: true
    }
  )
   const option={
    httpOnly: true,
    secure : true 
  }



  return res
  .status(200)
  .clearCookie("accessToken", option).
  clearCookie("refreshToken", option)
  .json(new ApiResponse(200, {}, "User logged out successfully"))

})

const refreshAccessToken = asyncHandler(async(req, res, next )=>{
 try {
    
   const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
 
   if(!incomingRefreshToken){
     throw new ApiError(401,"unauthorized request refresh token is required")
   }
   const verifyRefreshToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
 
   const user = await User.findById(verifyRefreshToken?._id)
 if(!user){
   throw new ApiError(401,"invalid  refresh token")
 }
 
 if(incomingRefreshToken !== user?.refreshTokens){
  throw new ApiError(401,"refresh token is expired or used")
 
 }
 
 const option = {
   httpOnly: true,
   secure : true
 }
 const {accessToken, newRefreshToken}= generateAcessAndRefreshtoken(user._id);
  
 res.status(200)
 .cookie("accessToken", accessToken, option)
 .cookie("refreshToken", newRefreshToken, option)
 .json(
   new ApiResponse(
     200, 
     { accessToken, 
       "refreshToken":newRefreshToken
     },
      "User logged in successfully"
   )
 )
 } catch (error) {
  throw new ApiError(401, error?.message|| "invalid refresh token used")
  
 }

})

const changeCurrentPassword = asyncHandler(async(req, res)=>{

  const {oldPassword, newPassword}= req.body;

  const user= await User.findById(req.user?._id);
  if (!user){
    throw new ApiError("user not find")
  }

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "old password is incorrect");
  }
   user.password = newPassword
   await user.save({ validateBeforeSave : false});
   return res
   .status(200)
   .json( new ApiResponse(200, {}, "password Changed Successfully"))

  

})


const getCurrentUser = asyncHandler(async(req, res )=>{

  return res
  .status(200)
  .json(new ApiResponse(200, req.user, "user fatch successfully"))
})

const updateUserDetails = asyncHandler(async(req, res)=>{

  const {fullName, email} = req.body ;

  if (!fullName || !email) {
    throw new ApiError(400, "fullName and email are required");
  }

  const user = await User.findByIdAndUpdate(req.user._id,
    {
      $set:{
        fullName,
        email,
      }
    },
    {
      new: true,
    }
  ).select("-password -refreshToken -varificationCode -varificationCodeExpiry -googleId -emailVerified")

  return res
  .status(200)
  .json( new ApiResponse (200,user, "User or Account updated successfully"))




})

const updateUserAvatar = asyncHandler(async(req, res)=>{

  const updatedAvatarLocalPath = req.file?.path
   
  if(!updatedAvatarLocalPath){
    throw new ApiError(400, "Avatar is missing in updating avatar");
  }

  const avatar = await uploadOnCloudinary(updatedAvatarLocalPath);

  if (!avatar.url){
    throw new ApiError(400, "Avatar is missing while  updating avatar in cloudinary");
  }

  const user = await User.findByIdAndUpdate(req.user?._id,
    {
      $set:{
        avatar: avatar.url,
      }
    },
    {
      new: true,
    }
  ).select("-password -refreshToken -varificationCode -varificationCodeExpiry -googleId -emailVerified")

  return res
  .status(200)
  .json( new ApiResponse (200,user, "User  avatar updated successfully"))


})


export { registerUser,
         loginUser, 
         logoutUser, 
         refreshAccessToken, 
         changeCurrentPassword, 
         getCurrentUser, 
         updateUserDetails,
         updateUserAvatar,
         verifyEmailCode
         };
