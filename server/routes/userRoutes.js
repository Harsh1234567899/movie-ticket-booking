import express from 'express'
import { getFavorites, updateFavorite, userBookings } from '../controllers/userController.js'

const userRouter = express.Router()
userRouter.get('/bookings', userBookings)
userRouter.post('/update-favorite', updateFavorite)
userRouter.get('/favorites', getFavorites)

export default userRouter