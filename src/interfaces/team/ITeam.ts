import { Document } from 'mongoose'
import IUser from '../user/IUser'
import IPokemon from '../pokemon/IPokemon'

export default interface ITeam extends Document {
  name?: string,
  members?: Array<IPokemon>,
  author?: IUser,
  mostSelectedType?: string,
  averageHp?: number,
  averageAttack?: number,
  averageDefense?: number,
  averageSpAttack?: number,
  averageSpDefense?: number,
  averageSpeed?: number,
  averageTotal?: number,

}
