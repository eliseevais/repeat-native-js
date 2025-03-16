import {CityTypeLocal} from "../02/02.test";
import {createMessagesForStreet, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05";

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

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
  let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

  expect(streetsNames.length).toBe(2);
  expect(streetsNames[0]).toBe("Central Str");
  expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
  let streetsNames = getStreetsTitlesOfHouses(city.houses);

  expect(streetsNames.length).toBe(3);
  expect(streetsNames[0]).toBe("White street");
  expect(streetsNames[1]).toBe("Happy street");
  expect(streetsNames[2]).toBe("Happy street");
})

test("create greeting messages for streets", () => {
  // data

  // action
  let messages1 = createMessagesForStreet(city.houses)

  // expect
  expect(messages1.length).toBe(3);
  expect(messages1[0]).toBe("Hello guys from White street")
  expect(messages1[1]).toBe("Hello guys from Happy street")
  expect(messages1[2]).toBe("Hello guys from Happy street")
})
