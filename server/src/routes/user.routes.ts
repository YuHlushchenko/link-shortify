import { Router } from 'express'

import { authMiddleware } from '@middlewares/auth.midelware'

import UserController from '@controllers/user.controller'

const router = Router()

router.get('/activateEmail/:link', UserController.activate)
router.get('/currentUser', authMiddleware, UserController.getCurrentUser)

export default router
