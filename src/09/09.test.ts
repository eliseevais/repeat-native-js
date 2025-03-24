import {UserType} from "./09";

let user: UserType;

const increaseUserAge = (u: UserType) => {
  u.age++
}

beforeEach(() => {
  user = {
    name: "Dimych",
    age: 32,
    address: {
      title: "Minsk"
    }
  }
})

test("increaseUser", () => {
  // data

  // action
  increaseUserAge(user);

  // expect
  expect(user.age).toBe(33)

  const superMan = user
  superMan.age = 1000
  expect(superMan.age).toBe(1000)
})

test("users test", () => {
  // data
  let users = [
    { name: "Irina", age: 33 },
    { name: "Masha", age: 35 },
  ]

  let admins = users;

  // action
  admins.push({name: "Bandyugan", age: 10})

  // expected
  expect(users[2]).toEqual({name: "Bandyugan", age: 10})
})

test("array reference test", () => {
  // data
  let usersCount = 100;
  let adminsCount = usersCount;

  // action
  adminsCount = adminsCount + 1;

  // expected
  expect(adminsCount).toBe(101);
  expect(usersCount).toBe(100);
})

test("object reference test", () => {
  // data
  user = {
    name: "Dimych",
    age: 32,
    address: {
      title: "Minsk"
    }
  };
  let add = user.address;
  let user2: UserType = {
    name: "Natasha",
    age: 30,
    address: user?.address
  };

  // action
  // @ts-ignore
  user2.address.title = "Kanary";

  // expected
  expect(user.address?.title).toBe("Kanary");
  expect(user.address).toBe(user2.address);
})

test("array2 reference test", () => {
  // data
  const address = {
    title: "Minsk",
  }
  let user: UserType = {
    name: "Dimych",
    age: 32,
    address: address
  }
  let user2: UserType = {
    name: "Natasha",
    age: 30,
    address: address
  }
  const users = [user, user2, { name: "Misha", age: 4, address: address }];

  const admins = [user, user2];

  // action
  admins[0].name = "Dmitry"

  // expected
  expect(users[0].name).toBe("Dmitry");
  expect(user.name).toBe("Dmitry");
})

test("sort test", () => {
  // data
  let letters = ["c", "d", "a", "z", "e"]
  // action
  // letters.sort()
  pasportist(letters)

  // expected
  expect(letters).toEqual(["a", "c", "d", "e", "z"])
})

function pasportist(letters: string[]) {
  const copy = letters.sort()
  return copy
}
