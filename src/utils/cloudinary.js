import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
  

const uploadOnCloudinary   = async(localfilepath)=>{
    try{
        if(!localfilepath) return null;
        // upload the file to cloudinary
        const response  = await  cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto",
        })
        // file has been uploaded successfullyc
        console.log("file is uploaded on cloudinary",response.url)
        return response.url;
    }catch(error){
        // fs.unlinkSync(localfilepath); remove the loaclly saved file as the upload operation got failed 
    }
}


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

    export {uploadOnCloudinary}