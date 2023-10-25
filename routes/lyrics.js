import { Router } from 'express'

const router = Router()

import * as lyricsCtrl from "../controllers/lyrics.js"
// GET localhost:3000/lyrics
router.get("/:search", lyricsCtrl.show)


export { router }