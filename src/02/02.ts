export const value02 = "02"

type TechnologiesType = {
  id: number
  title: string
}

export type CityType = {
  title: string
  country: string
}

export type AddressType = {
  street: string
  city: CityType
}

export type StudentType = {
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: TechnologiesType[]
}

export const student: StudentType = {
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[0].title)
console.log(student.technologies[2].title)
