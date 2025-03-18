import {PropsType} from "./07";

let props: PropsType;

beforeEach(() => {
  props = {
    name: "Dimych",
    age: 32,
    lessons: [{title: 1}, {title: 2}, {title: 3, name: "react"}],
    address: {
      street: {
        title: "Nezavisimosti street",
      }
    }
  }
})

test("basic1", () => {
  // data

  // action

  // const age = props.age
  // const lessons = props.lessons

  const { age, lessons } = props;
  const {title} = props.address.street

  const a = props.age
  const l = props.lessons

  // expect
  expect(age).toBe(32)
  expect(lessons.length).toBe(3)

  expect(a).toBe(32)
  expect(l.length).toBe(3)

  expect(title).toBe("Nezavisimosti street")
})

test("basic2", () => {
  // data
  const {age, lessons} = props;
  const {title} = props.address.street

  // action

  // expect
  expect(age).toBe(32)
  expect(lessons.length).toBe(3)
  expect(title).toBe("Nezavisimosti street")
})

test("basic3", () => {
  const lesson1 = props.lessons[0]
  const lesson2 = props.lessons[1]

  const [, lesson_2, ...restLessons] = props.lessons

  expect(lesson1.title).toBe(1)
  expect(lesson2.title).toBe(2)

  // expect(lesson_1.title).toBe(1)
  expect(lesson_2.title).toBe(2)
  expect(restLessons.length).toBe(1)
  expect(restLessons[0].title).toBe(3)
  expect(restLessons[0]).toStrictEqual({title: 3, name: "react"})
})
