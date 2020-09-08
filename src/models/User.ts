import { Schema, model, Document } from 'mongoose'
import bcrpty from 'bcrypt'

interface IUser extends Document{
  name?: string,
  email?: string,
  password?: string
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

export default model('User', UserSchema)
