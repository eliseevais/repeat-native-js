import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

type AddressType1 = {
  street: {
    title: string
  }
  number: number
}

export type HouseType1 = {
  buildedAt: number
  repaired: boolean
  address: AddressType1
}

export type CityTypeLocal1 = {
  title: string
  houses: HouseType1[]
  governmentBuildings: GovernmentBuildingsType1[]
  citizenNumber: number
}

export type GovernmentBuildingsType1 = {
  type: string
  budget: number
  staffCount: number
  address: AddressType1
}

let city1: CityTypeLocal1

beforeEach(() => {
  city1 = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012, repaired: false,
        address: {street: {title: "White street"}, number: 100}
      },
      {
        buildedAt: 2008, repaired: false,
        address: {street: {title: "Happy street"}, number: 100}
      },
      {
        buildedAt: 2020, repaired: false,
        address: {street: {title: "Happy street"}, number: 101}
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL", budget: 200000, staffCount: 200,
        address: {street: {title: "Central Str"}, number: 101}
      },
      {
        type: "FIRE-STATION", budget: 500000, staffCount: 1000,
        address: {street: {title: "South Str"}, number: 101}
      }
    ],
    citizenNumber: 100000
  }
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed for HOSPITAL', () => {
  addMoneyToBudget(city1.governmentBuildings[0], 100000);

  expect(city1.governmentBuildings[0].budget).toBe(300000);
});

// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
  addMoneyToBudget(city1.governmentBuildings[1], -100000);

  expect(city1.governmentBuildings[1].budget).toBe(400000);
});

// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
  repairHouse(city1.houses[1]);

  expect(city1.houses[1].repaired).toBeTruthy();
  expect(city1.houses[1].repaired).toBe(true);
});

// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
  toFireStaff(city1.governmentBuildings[0], 20);

  expect(city1.governmentBuildings[0].staffCount).toBe(180);
});

// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
  toHireStaff(city1.governmentBuildings[0], 20);

  expect(city1.governmentBuildings[0].staffCount).toBe(220);
});

test('Message greeting should be correct for the city', () => {
  const message = createMessage(city1)

  expect(message).toBe(`Hello New York citizens. I want you all be happy. All 100000 people`)
});
