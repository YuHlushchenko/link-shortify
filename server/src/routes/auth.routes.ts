import { Router } from 'express'

import AuthController from '@controllers/auth.controller'
import UserController from '@controllers/user.controller'

const router = Router()

router.post('/register', AuthController.register)
router.get('/activateEmail/:link', UserController.activateUser)

export default router
