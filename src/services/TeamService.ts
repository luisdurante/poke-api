import Team from '../models/Team'
class TeamService {
  async store (name:string, members:Array<string>, author:string):Promise<void> {
    const team = await Team.create({ name, members, author })
    console.log(team)
  }

  async list () {
    return await Team.find()
  }
}

export default new TeamService()
