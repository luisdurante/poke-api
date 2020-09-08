import { Router } from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware'
import controllers from './controllers'

const routes = Router()

routes.get('/ping', AuthMiddleware.authHeader, (req, res) => {
  return res.send('pong')
})

routes.post('/users', controllers.UserController.store)

routes.post('/sessions', controllers.SessionController.store)

routes.get('/poke', controllers.PokemonController.get)

export default routes
