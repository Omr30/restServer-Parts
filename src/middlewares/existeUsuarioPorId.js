import PartModel from '../models/parts.js'

const existeUsuarioPorId = async(id) => {

    const existePart = await PartModel.findById(id)
    if (!existePart) {
        throw new Error(`El id: ${id} no existe`)
    }
}

export default existeUsuarioPorId