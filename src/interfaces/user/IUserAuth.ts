import { Request } from 'express'

export default interface IUserAuth extends Request {
  userId:string
}
