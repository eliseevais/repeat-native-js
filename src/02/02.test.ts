type AddressType = {
  street: {
    title: string
  }
  number: number
}

type HousesType = {
  id?: number
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovernmentBuildingsType = {
  type: string
  budget: number
  staffCount: number
  address: AddressType
}

export type CityTypeLocal = {
  title: string
  houses: HousesType[]
  governmentBuildings: GovernmentBuildingsType[]
  citizenNumber: number
}

let city: CityTypeLocal

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: {
          street: {
            title: "White street"
          },
          number: 100
        }
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: {
          street: {
            title: "Happy street"
          },
          number: 100
        }
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: {
          street: {
            title: "Happy street"
          },
          number: 101
        }
      },
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

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("White street");

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe("Happy street");

  expect(city.houses[2].buildedAt).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(101);
  expect(city.houses[2].address.street.title).toBe("Happy street");
});

// 01. дополните тип GovernmentBuildingType2
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
  expect(city.governmentBuildings.length).toBe(2);

  expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[0].staffCount).toBe(200);
  expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

  expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
  expect(city.governmentBuildings[1].budget).toBe(500000);
  expect(city.governmentBuildings[1].staffCount).toBe(1000);
  expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
});

