import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import {serve} from "inngest/express"
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/showRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import userRouter from './routes/userRoutes.js'
import { protectAdmin } from './middleware/auth.js'
// import { protectAdmin } from './middleware/auth.js'
// import { requireAdmin } from './middlewares/adminAuth.js'
// import { ClerkExpressRequireAuth } from "@clerk/express";
const app = express()
const port = 3000


await connectDB()

//middelware

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// api routes

app.get('/',(req,res)=> res.send('server is live'))

app.use('/api/inngest',serve({ client: inngest, functions }))
app.use('/api/show',showRouter)

app.use('/api/booking',bookingRoutes)

app.use('/api/admin',protectAdmin,adminRouter)

app.use('/api/user',userRouter)

app.listen(port,()=> console.log(`server at http:://localhost:${port}`))