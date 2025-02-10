import { Router } from 'express'
import { body } from 'express-validator'

import AuthController from '@controllers/auth.controller'

const router = Router()

router.post(
  '/register',
  body('username').isString().isLength({ min: 3, max: 30 }),
  body('email').isEmail(),
  body('password').isString().isLength({ min: 6, max: 30 }),
  AuthController.register,
)
router.post(
  '/login',
  body('email').isEmail(),
  body('password').isString().isLength({ min: 6, max: 30 }),
  AuthController.login,
)
router.get('/logout', AuthController.logout)
router.get('/refresh', AuthController.refresh)

export default router
