import { Model } from 'mongoose'
import IUser from './IUser'

export default interface IUserModel extends Model<IUser> {
  generateToken(user:IUser):string
}
