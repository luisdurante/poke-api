import { Router } from 'express'
import PokemonController from './controllers/PokemonController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/ping', (req, res) => {
  return res.send('pong')
})

routes.post('/users', UserController.store)

routes.get('/poke', PokemonController.get)

export default routes
