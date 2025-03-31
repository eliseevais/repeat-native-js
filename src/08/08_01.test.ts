import {UsersType} from "./08_01";

export let users: UsersType

beforeEach(() => {
  users = {
    "101": {id: 101, name: "Dimych"},
    "32323212": {id: 32323212, name: "Natasha"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"},
  }
})

test("should update corresponding uses from object", () => {
  // data
  // action
  users["1"].name = "Ekaterina"
  // expect
  expect(users["1"].name).toBe("Ekaterina")
})

test("should delete corresponding uses from object", () => {
  // data
  // action
  delete users["1"]
  // expect
  expect(users["1"]).toBe(undefined)
})
