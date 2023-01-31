import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import cors from  'cors'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'

dotenv.config()

const app = express()

try {
    await db.authenticate()
    console.log('database connected');
} catch (error) {
    console.error(error);
}

app.use(cookieParser())
app.use(express.json())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(router)

app.listen(3999, () => console.log('server  running on port 3999'))