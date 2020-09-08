import Pokemon from '../models/Pokemon'
import { Request, Response } from 'express'

class PokemonController {
  async get (req:Request, res:Response):Promise<Response> {
    const { pokedexId } = req.body

    const pokemon = await Pokemon.findOne({ pokedexNumber: pokedexId })

    if (!pokemon) {
      return res.status(400).json({ error: 'Pokemon not found' })
    }

    return res.status(200).json(pokemon)
  }
}

export default new PokemonController()
