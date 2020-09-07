import { Schema, model } from 'mongoose'

const PokemonSchema = new Schema({
  pokedexNumber: {
    type: Number,
    unique: true
  },
  abilities: { type: Array },
  againstBug: { type: Number },
  againstDark: { type: Number },
  againstDragon: { type: Number },
  againstElectric: { type: Number },
  againstFairy: { type: Number },
  againstFight: { type: Number },
  againstFire: { type: Number },
  againstFlying: { type: Number },
  againstGhost: { type: Number },
  againstGrass: { type: Number },
  againstGround: { type: Number },
  againstIce: { type: Number },
  againstNormal: { type: Number },
  againstPoison: { type: Number },
  againstPsychic: { type: Number },
  againstRock: { type: Number },
  againstSteel: { type: Number },
  againstWater: { type: Number },
  attack: { type: Number },
  baseEggSteps: { type: Number },
  baseHappiness: { type: Number },
  baseTotal: { type: Number },
  captureRate: { type: Number },
  classfication: { type: String },
  defense: { type: Number },
  experienceGrowth: { type: Number },
  heightM: { type: Number },
  hp: { type: Number },
  japaneseName: { type: String },
  name: { type: String },
  percentageMale: { type: Number },
  spAttack: { type: Number },
  spDefense: { type: Number },
  speed: { type: Number },
  type1: { type: String },
  type2: { type: String },
  weightKg: { type: Number },
  generation: { type: Number },
  isLegendary: { type: Boolean },
  imageUrl: { type: String },
  spriteUrl: { type: String }

}, {
  timestamps: true
})

export default model('Pokemon', PokemonSchema)
