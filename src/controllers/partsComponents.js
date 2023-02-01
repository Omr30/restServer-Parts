import {request, response} from 'express'
import PartModel from '../models/parts.js'
import handleHttp from '../utils/error.handle.js'


const listParts = async(req = request, res = response) => {
    try {
        const query = {condition: true}
        const [total, parts] = await Promise.all([
            PartModel.countDocuments(query),
            PartModel.find(query)
        ])
        res.send({total, parts})
    } catch (error) {
        handleHttp(res, 'ERROR_GET_PARTS')
    }
}

const listPart = async(req = request, res = response) => {
    const {id} = req.params
    try {
        const exists = await PartModel.findById(id)
        if (!exists.condition) {
            res.status(404).send('El id ingresado no existe')
        }else{
            res.send(exists)
        }
    } catch (error) {
        handleHttp(res, 'ERROR_GET_PART', `El id: ${id} no es existe en el db`)
    }
}

const createPart = async(req = request, res = response) => {
    const content = req.body
    try {
        const createPart = new PartModel(content)
        await createPart.save()
    
        res.send(createPart)
    } catch (error) {   
        handleHttp(res, 'ERROR_POST_PART')
    }
}

const updatePart = async(req = request, res = response) => {
    const {id} = req.params
    try {
        // Verificar que se actualice una parte activa
        const {condition, createAt, updateAt, _id, ...part} = await PartModel.findById(id)
        if (condition === false) {
            res.status(404).send(`El id: ${id} no se puede actulizar`)
        }else {
            const updatePart = await PartModel.findByIdAndUpdate(id, part)
            res.send({msg: `${updatePart.brand} se actualizo con exito!`})
        }

    } catch (error) {
        handleHttp(res, 'ERROR_PUT_PART', `El id: ${id} no existe en la db`)
    }
}

const deletePart = async(req = request, res = response) => {
    const {id} = req.params
    try {
        const deletePart = await PartModel.findByIdAndUpdate(id, {condition: false})
        res.send({msg: `${deletePart.brand} se elimino con exito!`})
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_PART', `El id: ${id} no es existe en el db`)
    }
}

export {
    listParts,
    listPart,
    createPart,
    updatePart,
    deletePart
}