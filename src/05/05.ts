import {GovernmentBuildingsType1} from "../03/03_02.test";
import {HousesType} from "../02/02.test";

export let value05 = "05"

export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: "Andrew Ivanov", age: 33},
  {name: "Alexander Petrov", age: 24},
  {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => {
  return {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
  }
}

const devs = [
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov"
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Alexander",
    lastName: "Petrov"
  },

  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Dmitry",
    lastName: "Sidorov"
  }
]

const devs2 = [
  dimychTransformator(people[0]),
  dimychTransformator(people[1]),
  dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1]
}))

const messages = people.map((man) => `Hello, ${man.name.split(" ")[0]}, welcome to IT-Incubator`)

console.log("messages", messages)

export const createGreetingMessage = (people: ManType[]) => {
  return people.map((man) => `Hello, ${man.name.split(" ")[0]}, welcome to IT-Incubator`)
}

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType1[]) => {
  return buildings.map(item => item.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
  return houses.map(item => item.address.street.title)
}

export const createMessagesForStreet = (houses: HousesType[]) => {
  return houses.map(item => `Hello guys from ${item.address.street.title}`)
}
