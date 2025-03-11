import {StudentType} from "../02/02";
import {CityTypeLocal1, GovernmentBuildingsType1, HouseType1} from "./03_02.test";

export const value03 = "03"

const sum = (a: number, b: number): number => {
  return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true
}

export const doesStudentLiveInCity = (student: StudentType, city: string) => {
  return student.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingsType1, budget: number) => {
  building.budget = building.budget + budget
}

export const repairHouse = (house: HouseType1) => {
  house.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildingsType1, toFire: number) => {
  governmentBuildings.staffCount -= toFire
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType1, toHire: number) => {
  governmentBuildings.staffCount += toHire
}

export const createMessage = (city: CityTypeLocal1) => {
  return `Hello ${city.title} citizens. I want you all be happy. All ${city.citizenNumber} people`
}
