import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
  student = {
    name: "Irina",
    age: 32,
    isActive: false,
    address: {
      street: "prospect Mira",
      city: {
        title: "Suvorov",
        country: "Russia"
      }
    },
    technologies: [
      {id: 1, title: "HTML",},
      {id: 2, title: "JS",},
      {id: 3, title: "React",},
    ]
  }
})

test("new skill should be add too student", () => {
  // data
  // done above, beforeEach

  // action
  addSkill(student, "Node.js")

  // expected
  expect(student.technologies.length).toBe(4)
  expect(student.technologies[3].title).toBe("Node.js")
  expect(student.technologies[3].id).toBeDefined()
})

test("student is active", () => {
  // data
  // done above, beforeEach
  expect(student.isActive).toBe(false)

  // action
  makeStudentActive(student)

  // expected
  expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {
  // data
  // done above, beforeEach

  // action
  let result1 = doesStudentLiveInCity(student, "Moscow")
  let result2 = doesStudentLiveInCity(student, "Suvorov")

  // expected
  expect(result1).toBe(false)
  expect(result2).toBe(true)
})
