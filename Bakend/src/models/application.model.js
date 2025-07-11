import mongoose, { Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    firstName: {
      type: String,
      trim: true,
      requried: true,
      index: true,
      minlength: [2],
    },
    lastName: {
      type: String,
      requried: true,
      trim: true,
      minlength: [2],
      index: true,
    },
    fatherName: {
      type: String,
      requried: true,
      trim: true,
      minlength: [2],
      index: true,
    },
    motherName: {
      type: String,
      requried: true,
      trim: true,
      minlength: [2],
      index: true,
    },
    gender: {
      type: String,
      requried: true,
      enum: ["male", "female", "other"],
      trim: true,
    },
    maritalStatus: {
      type: String,
      requried: true,
      enum: ["single", "married", "divorced"],
      trim: true,
    },
    birthPlace: {
      type: String,
      requried: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      requried: true,
      trim: true,
    },
    university: {
      type: String,
      requried: true,
      trim: true,
    },
    program: {
      type: String,
      requried: true,
      trim: true,
    },
    course: {
      type: String,
      requried: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10,15}$/, "Invalid phone number"],
    },
    photo: {
      type: String,
      required: true,
    },
    passportCopy: {
      type: String,
      required: true,
    },
    secondaryCertificate: {
      type: String,
      required: true,
    },
    englishCompetence: String,
    bsDegreeCertificate: String,
    bsTranscript: String,
    msCertificate: String,
    msTranscript: String,
    phdResearchProposal: String,
    cv: String,
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", ApplicationSchema);
