import mongoose from 'mongoose'

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB, () => {
            console.log("Connected to MongoDB");
          });
        console.log('Base de datos online!');
    } catch (error) {
        console.log(error);
        throw new Error('Error al connectar la base de datos')
    }
}


export default dbConnection