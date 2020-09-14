import TeamService from '../services/TeamService'
import { Request, Response } from 'express'

class TeamController {
  async store (req:Request, res:Response):Promise<Response> {
    const { members, name } = req.body
    const userId = req.userId

    if (!members || members.length === 0) {
      return res.status(400).json({ error: 'Your team needs to have at least 1 pokemon' })
    }

    try {
      await TeamService.store(name, members, userId)
      return res.status(200).json({ message: `Team ${name} created!` })
    } catch (err) {
      return res.status(400).json({ error: err })
    }
  }

  async list (req:Response, res:Response) {
    return res.status(200).json({ team: await TeamService.list() })
  }
}

export default new TeamController()
