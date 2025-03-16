test("take men who is older then 90", () => {
  // data
  const ages = [18, 20, 22, 1, 100, 90, 14]

  // action
  const oldAges = ages.filter(age => age > 90)

  // expect
  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

test("take courses cheaper then 160", () => {
  // data
  type CourseType = {
    title: string
    price: number
  }

  const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
  ]

  // action
  const cheapCourses = courses.filter(course => course.price < 160)

  // expect
  expect(cheapCourses.length).toBe(2)
  expect(cheapCourses[1].title).toBe("React")
})

test("take only completed tasks", () => {
  // data
  type TaskType = {
    id: number
    title: string
    isDone: boolean
  }

  const tasks = [
    {id: 1, title: "bread", isDone: false},
    {id: 2, title: "milk", isDone: true},
    {id: 3, title: "salt", isDone: false},
    {id: 4, title: "sugar", isDone: true},
  ]

  // action
  const completedTasks = tasks.filter((task: TaskType) => task.isDone)

  // expect
  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].id).toBe(2)
  expect(completedTasks[1].title).toBe("sugar")
})

test("take only uncompleted tasks", () => {
  // data
  type TaskType = {
    id: number
    title: string
    isDone: boolean
  }

  const tasks = [
    {id: 1, title: "bread", isDone: false},
    {id: 2, title: "milk", isDone: true},
    {id: 3, title: "salt", isDone: false},
    {id: 4, title: "sugar", isDone: true},
  ]

  // action
  const uncompletedTasks = tasks.filter((task: TaskType) => !task.isDone)

  // expect
  expect(uncompletedTasks.length).toBe(2)
  expect(uncompletedTasks[0].id).toBe(1)
  expect(uncompletedTasks[1].title).toBe("salt")
})
