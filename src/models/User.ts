import { Schema, model } from 'mongoose'
import IUser from '../interfaces/user/IUser'
import IUserModel from '../interfaces/user/IUserModel'
import jwt from 'jsonwebtoken'
import bcrpty from 'bcrypt'
import authConfig from '../config/auth'

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
  generateToken ({ id }:IUser) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

export default model<IUser, IUserModel>('User', UserSchema)
