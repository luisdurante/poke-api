import { Document } from 'mongoose'

export default interface IUser extends Document {
  name: string,
  email: string,
  password: string

  compareHash(password:string):Promise<boolean>
}
