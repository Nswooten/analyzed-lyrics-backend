import { Router } from 'express'

const router = Router()

import * as authCtrl from "../controllers/auth.js"
// GET localhost:3000/users
router.post("/login", authCtrl.login)

export { router }
