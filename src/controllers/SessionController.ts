import User from '../models/User'
import { Request, Response } from 'express'

class SessionController {
  async store (req:Request, res:Response) {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      res.status(400).json({ error: 'User not found' })
    }

    if (!await user.compareHash(password)) {
      return res.status(400).json({ error: 'Invalid Password' })
    }

    return res.status(200).json({ user, token: User.generateToken(user) })
  }
}

export default new SessionController()
