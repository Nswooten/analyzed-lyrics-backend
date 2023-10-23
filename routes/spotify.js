import { Router } from 'express'

const router = Router()

import * as spotifyCtrl from "../controllers/spotify.js"
// GET localhost:3000/spotify
router.get("/:search", spotifyCtrl.search)


export { router }