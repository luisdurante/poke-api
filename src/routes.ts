import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'

const routes = Router()

routes.get('/ping', (req, res) => {
  return res.send('pong')
})

routes.get('/poke', PokemonController.get)

export default routes
