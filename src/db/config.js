import mongoose from 'mongoose'

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('Base de datos online!');
    } catch (error) {
        console.log(error);
        throw new Error('Error al connectar la base de datos')
    }
}


export default dbConnection