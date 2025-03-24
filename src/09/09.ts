export const value09 = "09";

export type UserType = {
  name: string
  age: number
  address?: {
    title: string
  }
}

let user = {
  name: "Dimych",
  age: 32
}

const increaseUserAge = (user: UserType) => {
  user.age++
}
