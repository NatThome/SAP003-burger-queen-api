import { Router } from 'express'
import ProductController from '../server/controllers/ProductController'

const router = Router()
router.get('/', ProductController.getAll)
router.post('/', ProductController.addProduct)
// router.get('/:id', ProductController.getProduct)
// router.put('/:id', ProductController.updatedProduct)
// router.delete('/:id', ProductController.deleteProduct)
export default router