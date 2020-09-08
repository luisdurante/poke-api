import { Request } from 'express'

export interface IUserAuth extends Request {
  userId:string
}
