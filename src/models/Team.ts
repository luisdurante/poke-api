import { Schema, model } from 'mongoose'
import ITeam from '../interfaces/team/ITeam'

const TeamSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'Pokemon',
    required: true
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mostSelectedType: { type: String },
  averageHp: { type: Number },
  averageAttack: { type: Number },
  averageDefense: { type: Number },
  averageSpAttack: { type: Number },
  averageSpDefense: { type: Number },
  averageSpeed: { type: Number },
  averageTotal: { type: Number }
}, {
  timestamps: true
})
// continuar o save
TeamSchema.pre<ITeam>('save', async function (next) {
  this.averageAttack = 1
})

export default model('Team', TeamSchema)
