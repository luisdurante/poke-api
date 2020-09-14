import { Router } from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware'
import controllers from './controllers'

const routes = Router()

routes.get('/ping', AuthMiddleware.authHeader, (req, res) => {
  return res.send('pong')
})

routes.post('/users', controllers.UserController.store)

routes.post('/sessions', controllers.SessionController.store)

// pokemon routes

routes.get('/pokemon/:pokedexId', controllers.PokemonController.get)
routes.post('/team', AuthMiddleware.authHeader, controllers.TeamController.store)
// routes.get('/team', AuthMiddleware.authHeader, controllers.TeamController.list)

export default routes
