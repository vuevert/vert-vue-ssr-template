abstract class UserService {
  static async getUserList (): Promise<IUser[]> {
    return [
      { name: 'LancerComet', age: 10 },
      { name: 'Wch', age: 20 }
    ]
  }
}

interface IUser {
  name: string
  age: number
}

export {
  UserService,
  IUser
}
