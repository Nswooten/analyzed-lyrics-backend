import { Router } from 'express'

const router = Router()

import * as authCtrl from "../controllers/auth.js"
// GET localhost:3000/auth
router.post("/login", authCtrl.login)
router.post("/refresh", authCtrl.refresh)

export { router }
