import { Curosel } from "../models/Curosel.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const curoselImages = asyncHandler(async (req, res) => {

    const image1LocalPath = req.files?.image1[0]?.path
    if (!image1LocalPath) {
        throw new ApiError(400, "image1 is required...")
    }
    const image1 = await uploadOnCloudinary(image1LocalPath)
    if (!image1) {
        throw new ApiError(400, "image1 field is required...")
    }
    const image2LocalPath = req.files?.image2[0]?.path
    if (!image2LocalPath) {
        throw new ApiError(400, "image2 is required...")
    }
    const image2 = await uploadOnCloudinary(image2LocalPath)
    if (!image2) {
        throw new ApiError(400, "image2 field is required...")
    }
    const image3LocalPath = req.files?.image3[0]?.path
    if (!image3LocalPath) {
        throw new ApiError(400, "image3 is required...")
    }
    const image3 = await uploadOnCloudinary(image3LocalPath)
    if (!image3) {
        throw new ApiError(400, "image3 field is required...")
    }
console.log(image1,image2,image3);
    const curoselPics = await Curosel.create({
        image1: image1,
        image2: image2,
        image3: image3
    })

    return res.status(201).json(
        new ApiResponse(200, curoselPics, "imgaes upload successfully...")
    )

})

const getCuroselImages = asyncHandler(async (req, res) => {
    try {
        const ImagesGet = await Curosel.find({})
        return res.status(200).json(
            new ApiResponse(200, ImagesGet, "Curosel Images get successfully..")
        )
    } catch (error) {
        throw new ApiError(404, "Failed to find the CuroselImages...")
    }
})



export {
    curoselImages,
    getCuroselImages
}