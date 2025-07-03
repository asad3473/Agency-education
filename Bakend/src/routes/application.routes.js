import {createApplication, getApplication} from "../controllers/application.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";



const router = Router();

router.route("/create-application").post(
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "passportCopy", maxCount: 1 },
    { name: "secondaryCertificate", maxCount: 1 },
    { name: "englishCompetence", maxCount: 1 },
    { name: "bsDegreeCertificate", maxCount: 1 },
    { name: "bsTranscript", maxCount: 1 },
    { name: "msCertificate", maxCount: 1 },
    { name: "msTranscript", maxCount: 1 },
    { name: "phdResearchProposal", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]), verifyJWT,
  createApplication
);

router.route("/get-all-apllication").get(verifyJWT, getApplication);


export default router