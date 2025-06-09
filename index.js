import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'
import { ProductRouter } from './routes/productRoutes.js'
// import { loggerMiddleware } from './middlewares/loggerMiddleware.js'
dotenv.config()

const app = express()
app.use(express.json())
// app.use(loggerMiddleware)

app.use("/api/products", ProductRouter)

// To handle undefined routes
app.use((req,res)=>{
    res.status(404).json({message:"404 Not Found."})
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(chalk.bgWhiteBright.green.bold(`Server running on http://localhost:${PORT}`))
})