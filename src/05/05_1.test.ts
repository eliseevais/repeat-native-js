import {createGreetingMessage} from "./05";

type ManType = {
  name: string
  age: number
}

let people: Array<ManType> = []

beforeEach(() => {
  people = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
  ]
})


test("get array of greeting messages", () => {
  // data above

  // action
  const messages = createGreetingMessage(people)

  // expected
  expect(messages.length).toBe(3)
  expect(messages[0]).toBe("Hello, Andrew, welcome to IT-Incubator")
  expect(messages[1]).toBe("Hello, Alexander, welcome to IT-Incubator")
  expect(messages[2]).toBe("Hello, Dmitry, welcome to IT-Incubator")
})
