import User from '../models/User'
import { Request, Response } from 'express'

class UserController {
  async store (req:Request, res:Response):Promise<Response> {
    const { email, name, password } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Email already in use' })
    }
    const user = await User.create({ email, name, password })

    return res.status(200).json({ user })
  }
}

export default new UserController()
