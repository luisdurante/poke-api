import { Request, Response, NextFunction } from 'express'
import authConfig from '../config/auth'
import jwt from 'jsonwebtoken'

class AuthMiddleware {
  async authHeader (req:Request, res:Response, next:NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' })
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = jwt.verify(token, authConfig.secret)

      req.userId = (<{ id:string }>decoded).id

      return next()
    } catch (err) {
      res.status(401).json({ error: 'Invalid Token' })
    }
  }
}

export default new AuthMiddleware()
