import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    const uploadOnCloudinary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null

          const response = await  cloudinary.uploader.upload(localFilePath, {
                resource_type : "auto"
            })

          //  console.log("file Uploaded on cloudinary", response.url)
          fs.unlinkSync(localFilePath)
            return response
        }
        catch (error) {
            fs.unlinkSync(localFilePath); // remove the locally saved temporary file as upload operation got failed
            console.error("Error uploading file to cloudinary", error)
            return null
        }
    }


    const deleteOnCloudinary = async (localPathDelete) => {
        try {
            if (!localPathDelete) return null;
    
            //delete file from cloudinary
            const result = await cloudinary.uploader.destroy(localPathDelete, {
                resource_type: "auto"
            });
        } catch (error) {
            return error;
            console.log("delete on cloudinary failed", error);
        }
    };

    export {uploadOnCloudinary, deleteOnCloudinary};