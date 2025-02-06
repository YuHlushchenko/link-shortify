export interface CreateUserDto {
  username: string
  email: string
  password: string
  isActivated: boolean
  activationLink: string
}

export interface UpdateUserDto {
  username: string
  email: string
}
