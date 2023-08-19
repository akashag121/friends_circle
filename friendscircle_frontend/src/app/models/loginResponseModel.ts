export interface loginResponseModel {
  id: number
  username: string
  email: string
  description: string
  imageId: string
  fullName: string
  roles: Role[]
  dob: string
  gender: string
  _token: string
  active: boolean
}

export interface Role {
  id: number
  name: string
}
