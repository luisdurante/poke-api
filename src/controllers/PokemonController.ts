import Pokemon from '../models/Pokemon'
import { Request, Response } from 'express'

export async function get (req:Request, res:Response):Promise<Response> {
  const { id } = req.body

  const match = await Pokemon.findOne({ pokedexNumber: id })

  if (!match) {
    return res.status(400).json({ error: 'Match not found' })
  }

  return res.status(200).json(match)
}
