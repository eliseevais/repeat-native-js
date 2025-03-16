import {CityTypeLocal, GovernmentBuildingsType} from "../02/02.test";

const ages = [18, 20, 22, 1, 100, 98, 14]

const predicate = (age: number) => {
  return age > 90
}

const oldAges = [100] // > 90

type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'React', price: 150},
]

const cheapPredicate = (course: CourseType) => {
  return course.price < 160
}

const cheapCourses = [
  {title: 'CSS', price: 110},
  {title: 'React', price: 150},
]

export const demolishHousesOnTheStreet = (city: CityTypeLocal, street: string) => {
  city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], count: number) => {
  return buildings.filter(building => building.staffCount > count);
};
