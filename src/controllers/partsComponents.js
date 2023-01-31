import {request, response} from 'express'
import PartModel from '../models/parts.js'


const listParts = async(req = request, res = response) => {
    const parts = await PartModel.find({condition: true})
    res.send(parts)
}

const listPart = async(req = request, res = response) => {
    const {id} = req.params
    const exists = await PartModel.find({condition: true})
    if (!exists) {
        res.status(404).send('El id ingresado no existe')
    }
    const findPart = await PartModel.findById(id)
    res.send(findPart)
}

const createPart = async(req = request, res = response) => {
    const content = req.body
    const createPart = await PartModel.create(content)
    res.send(createPart)
}

const updatePart = async(req = request, res = response) => {
    const {id} = req.params
    const updatePart = await PartModel.findByIdAndUpdate(id, req.body)
    res.send({msg: `${updatePart.brand} se actualizo con exito!`})
}

const deletePart = async(req = request, res = response) => {
    const {id} = req.params
    const deletePart = await PartModel.findByIdAndUpdate(id, {condition: false})
    res.send({msg: `${deletePart.brand} se elimino con exito!`})
}

export {
    listParts,
    listPart,
    createPart,
    updatePart,
    deletePart
}