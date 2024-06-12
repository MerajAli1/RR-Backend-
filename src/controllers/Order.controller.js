import { Order } from "../models/Order.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
const orderPlaced = asyncHandler(async (req, res) => {

    const { firstName, lastName, phoneNumber, email, address, city, state, postalCode, orderItems } = req.body

    if (!firstName || !lastName || !phoneNumber || !email || !address || !city || !state || !postalCode) {
        throw new ApiError(400, "All fields are required...!")
    }
    // let name = firstName + lastName
    const order = await Order.create({
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        city,
        state,
        postalCode,
        orderItems
    })

    return res.status(201).json(
        new ApiResponse(200, order, "order Placed successfully.... ")
    )
})

const getOrder = asyncHandler(async (req, res) => {
    try {
        const Orderget = await Order.find({})
        res.status(200).json(
            new ApiResponse(201, Orderget, "order found successfully...")
        )
    } catch (error) {
        throw new ApiError(404, "order not found....")
    }

})
export {
    orderPlaced,
    getOrder
}