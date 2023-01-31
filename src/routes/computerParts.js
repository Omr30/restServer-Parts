import {Router} from 'express'
import { listParts, listPart, createPart, updatePart, deletePart } from '../controllers/partsComponents.js'

const router = Router()

router.get('/', listParts)
router.get('/:id', listPart)
router.post('/', createPart)
router.put('/:id', updatePart)
router.delete('/:id', deletePart)


export default router