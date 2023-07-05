export interface IUser {
  id: string | number
  name: string
  username: string
  phone: string
  email: string
  website: string
  company: {
    bs: string
    name: string
    catchPhrase: string
  }
  address: {
    zipcode: string
    city: string
    street: string
    suite: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export interface IPost {
  id: string | number
  userId: string | number
  title: string
  body: string
}

export interface ITask {
  id: string | number
  userId: string | number
  title: string
  completed: boolean
}
