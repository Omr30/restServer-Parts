import {Router} from 'express'
import { listParts, listPart, createPart, updatePart, deletePart } from '../controllers/partsComponents.js'
import validarCampos from '../middlewares/validar-campos.js'
import {check} from 'express-validator'
import existeUsuarioPorId from '../middlewares/existeUsuarioPorId.js'

const router = Router()

router.get('/', listParts)

router.get('/:id',  [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], listPart)

router.post('/', [
    check('brand', 'El brand es obligatorio').exists().notEmpty(),
    check('model', 'El model es obligatorio').exists().notEmpty(),
    validarCampos
], createPart)

router.put('/:id',  [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], updatePart)

router.delete('/:id',  [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], deletePart)


export default router