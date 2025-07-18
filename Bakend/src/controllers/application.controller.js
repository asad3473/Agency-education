import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Application } from "../models/application.model.js";
import { User } from "../models/user.model.js";

const createApplication = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    fatherName,
    motherName,
    gender,
    maritalStatus,
    birthPlace,
    dob,
    nationality,
    university,
    program,
    course,
    email,
    phoneNumber,
    cnic,
  } = req.body;

  
  if (
    !firstName ||
    !lastName ||
    !fatherName ||
    !motherName ||
    !gender ||
    !maritalStatus ||
    !birthPlace ||
    !dob ||
    !nationality ||
    !university ||
    !program ||
    !course ||
    !email ||
    !phoneNumber ||
    !cnic
  ) {
    throw new ApiError(400, "All required fields must be filled");
  }

  
  const alreadyExists = await Application.findOne({
  userId: req.user?._id, university, program, course 
  });
  if (alreadyExists) {
    throw new ApiError(
      409,
      "You have already applied for this university, program, and course"
    );
  }
  let photoLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.photo) &&
    req.files.photo.length > 0
  ) {
    photoLocalPath = req.files.photo[0].path;
  }

  let passportLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.passportCopy) &&
    req.files.passportCopy.length > 0
  ) {
    passportLocalPath = req.files.passportCopy[0].path;
  }

  let certificateLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.secondaryCertificate) &&
    req.files.secondaryCertificate.length > 0
  ) {
    certificateLocalPath = req.files.secondaryCertificate[0].path;
  }

  if (!certificateLocalPath || !passportLocalPath || !photoLocalPath) {
    throw new ApiError(
      409,
      "photo , secondaryCertificate and passportCopy are required"
    );
  }

  const secondaryCertificate = await uploadOnCloudinary(certificateLocalPath);
  const photo = await uploadOnCloudinary(photoLocalPath);
  const passportCopy = await uploadOnCloudinary(passportLocalPath);

  let englishLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.englishCompetence) &&
    req.files.englishCompetence.length > 0
  ) {
    englishLocalPath = req.files.englishCompetence[0].path;
  }

  let bsDegreeLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.bsDegreeCertificate) &&
    req.files.bsDegreeCertificate.length > 0
  ) {
    bsDegreeLocalPath = req.files.bsDegreeCertificate[0].path;
  }

  let transcriptLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.bsTranscript) &&
    req.files.bsTranscript.length > 0
  ) {
    transcriptLocalPath = req.files.bsTranscript[0].path;
  }

  let msCertificateLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.msCertificate) &&
    req.files.msCertificate.length > 0
  ) {
    msCertificateLocalPath = req.files.msCertificate[0].path;
  }

  let msTranscriptLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.msTranscript) &&
    req.files.msTranscript.length > 0
  ) {
    msTranscriptLocalPath = req.files.msTranscript[0].path;
  }

  let researchLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.phdResearchProposal) &&
    req.files.phdResearchProposal.length > 0
  ) {
    researchLocalPath = req.files.phdResearchProposal[0].path;
  }

  let cvLocalPath;

  if (req.files && Array.isArray(req.files.cv) && req.files.cv.length > 0) {
    cvLocalPath = req.files.cv[0].path;
  }

  const cv = await uploadOnCloudinary(cvLocalPath);
  const phdResearchProposal = await uploadOnCloudinary(researchLocalPath);
  const msTranscript = await uploadOnCloudinary(msTranscriptLocalPath);
  const msCertificate = await uploadOnCloudinary(msCertificateLocalPath);
  const bsTranscript = await uploadOnCloudinary(transcriptLocalPath);
  const bsDegreeCertificate = await uploadOnCloudinary(bsDegreeLocalPath);
  const englishCompetence = await uploadOnCloudinary(englishLocalPath);

  const application = await Application.create({
    firstName,
    lastName,
    fatherName,
    motherName,
    gender,
    maritalStatus,
    birthPlace,
    dob,
    nationality,
    university,
    program,
    course,
    email,
    phoneNumber,
    cnic,
    photo: photo?.url || "",
    passportCopy: passportCopy?.url || "",
    secondaryCertificate: secondaryCertificate?.url || "",
    englishCompetence: englishCompetence?.url || "",
    bsDegreeCertificate: bsDegreeCertificate?.url || "",
    bsTranscript: bsTranscript?.url || "",
    msCertificate: msCertificate?.url || "",
    msTranscript: msTranscript?.url || "",
    phdResearchProposal: phdResearchProposal?.url || "",
    cv: cv?.url || "",
  });
    
  if(!application){
    throw new ApiError(404, "application not created try again")
  }
  console.log(application)
  res
    .status(201)
    .json(new ApiResponse(201, {}, "Application submitted successfully"));
});

const getApplication = asyncHandler(async (req, res) => {
  const userId = req.user?._id;

  const totalApplications = Application.findById(userId);

  if (!totalApplications) {
    throw new ApiError(409, "applications not found");
  }

  res
    .status(201)
    .json(
      new ApiResponse(201, totalApplications, "applications get successfully")
    );
});






export { createApplication, getApplication };
