import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import routeComputerParts from './routes/computerParts.js'
import dbConnection from './db/config.js'

dotenv.config()
const PORT = process.env.PORT

// Conectar db
const conectarDB = async() => {
    await dbConnection()
}

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/parts', routeComputerParts)

app.listen(PORT, () => {
    console.log(`App listen in port ${PORT}`);
})

conectarDB()