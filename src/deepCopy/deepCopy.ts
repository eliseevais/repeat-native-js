export const deepCopy = "deepCopy";

let a = {
  name: "it-incubator",
  protocol: "https",
  maxStudentsCount: 10,
  isOnline: true,
  students: ["ivan", "andrey", "farid"],
  classroom: {
    teacher: {
      name: 'wew',
      age: 18
    }
  }
}

let b = {
  ...a,
  students: [...a.students],
  classroom: {...a.classroom,
    teacher: {...a.classroom.teacher},
  }
};

b.classroom.teacher.name = "dmitry"
console.log(b.classroom.teacher.name)
console.log(a.classroom.teacher.name)
b.students[0] = "IVAN"
console.log(b.students[0])
console.log(a.students[0])
