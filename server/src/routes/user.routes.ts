import { Router } from 'express'

import UserController from '@controllers/user.controller'

const router = Router()

router.get('/activateEmail/:link', UserController.activate)

export default router
