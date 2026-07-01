import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



// Function > Upload image on cloudinary from local storage (server)
const uploadOnCloudinary = async (localFilePath) => {
    try {
        // No local path given
        if (!localFilePath) return null

        const response = await cloudinary.uploader
            .upload(localFilePath, {
                resource_type: 'auto'
            })
            .then(console.log("File uploaded on Cloudinary!", response.url));

            return response;

    } catch (error) {

        // Remove the locally saved temporary file -> upload operation failed
        fs.unlinkSync(localFilePath)
        console.log("File upload failed! Removed file from local storage.")
        return null;
    }
} 

export {uploadOnCloudinary}
