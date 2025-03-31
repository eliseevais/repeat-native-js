export const value08 = "08"

export const usersObj = {
  "0": "Dimych",
  "1": "Natasha",
  "2": "Valera",
  "3": "Katya",
}

export type UserType = {
  id: number
  name: string
}

export type UsersType = {
  [key: string]: UserType
}

export const users: UsersType = {
  "101": {id: 101, name: "Dimych"},
  "32323212": {id: 32323212, name: "Natasha"},
  "1212": {id: 1212, name: "Valera"},
  "1": {id: 1, name: "Katya"},
}

let user = {id: 10050, name: "Igor" }
users[user.id] = user;

export const usersArray = [
  {id: 101, name: "Dimych"},
  {id: 32323212, name: "Natasha"},
  {id: 1212, name: "Valera"},
  {id: 1, name: "Katya"},
]

usersArray.push(user);
let usersCopy = [...usersArray, user]
