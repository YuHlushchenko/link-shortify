import { Router } from 'express'

import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import linkRoutes from './link.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/link', linkRoutes)

export default router
