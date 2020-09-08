import { Schema, model, Document, Model } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrpty from 'bcrypt'
import authConfig from '../config/auth'

interface IUser extends Document{
  name?: string,
  email?: string,
  password?: string
  compareHash(password:string):Promise<boolean>
}

export interface IUserModel extends Model<IUser> {
  generateToken(user:IUser):string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrpty.hash(this.password, 8)
})

UserSchema.methods = {
  async compareHash (password:string):Promise<boolean> {
    return await bcrpty.compare(password, this.password)
  }
}

UserSchema.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

export default model<IUser, IUserModel>('User', UserSchema)
