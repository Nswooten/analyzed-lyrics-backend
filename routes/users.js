import { Router } from 'express'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.send('meow meow kitty kitty meow meow')
})

export { router }
