import {CityTypeLocal} from "../02/02.test";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04";

let city: CityTypeLocal;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {id: 1, buildedAt: 2012, repaired: false,
        address: {street: {title: "White street"},number: 100}},
      {id: 2, buildedAt: 2008, repaired: false,
        address: {street: {title: "Happy street"},number: 100}},
      {id: 3, buildedAt: 2020, repaired: false,
        address: {street: {title: "Happy street"},number: 101}},
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: "Central Str"
          },
          number: 101
        }
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: "South Str"
          },
          number: 101
        }
      }
    ],
    citizenNumber: 100000
  }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
  //data above
  //action
  demolishHousesOnTheStreet(city, 'Happy street');

  // expect
  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
  let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('FIRE-STATION')
})
