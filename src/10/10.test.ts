import {
  addCompanyToUser,
  addNewBooksToUser,
  CompaniesAssociativeArrayType,
  makeHairStyle,
  makeUserWithLaptop,
  moveUser,
  moveUserToOtherHouse,
  removeUserBook,
  updateCompanyTitle,
  updateCompanyTitle2,
  updateUserBook,
  UserType,
  UserWithBooks,
  UserWithLaptop,
  WithCompaniesType
} from "./10";

test("reference type test", () => {
  //data
  let user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    }
  }

  // action
  const awesomeUser = makeHairStyle(user, 2)
  user.address.city = "Kiev"

  // expected
  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
  expect(awesomeUser.address).toBe(user.address)
})

test("change user type test", () => {
  //data
  let user: UserWithLaptop = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    }
  }

  // action
  const movedUser: UserWithLaptop = moveUser(user, "Kiev")

  // expected
  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.address.city).toBe("Minsk")
  expect(movedUser.address.city).toBe("Kiev")
  expect(user.laptop).toBe(movedUser.laptop)
})

test("upgrade user laptop", () => {
  //data
  let user: UserWithLaptop = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    }
  }

  // action
  const userWithNewLaptop: UserWithLaptop = makeUserWithLaptop(user, "MacBook")

  // expected
  expect(user).not.toBe(userWithNewLaptop)
  expect(user.laptop.title).not.toBe(userWithNewLaptop.laptop.title)
  expect(user.laptop.title).toBe("ZenBook")
  expect(user.address.city).toBe(userWithNewLaptop.address.city)
  expect(userWithNewLaptop.laptop.title).toBe("MacBook")
})


test("user with books and change house", () => {
  //data
  let user: UserWithLaptop & UserWithBooks = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"]
  }

  // action
  const userCopy = moveUserToOtherHouse(user, 99)

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.books).toBe(userCopy.books)
  expect(user.laptop.title).toBe(userCopy.laptop.title)
  expect(user.address).not.toBe(userCopy.address)
  expect(userCopy.address.house).toBe(99)
})

test("add new books to user", () => {
  //data
  let user: UserWithLaptop & UserWithBooks = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"]
  }

  // action
  const userCopy = addNewBooksToUser(user, ["ts", "rest api"])

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.books).not.toBe(userCopy.books)
  expect(user.laptop.title).toBe(userCopy.laptop.title)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[4]).toBe("ts")
  expect(userCopy.books[5]).toBe("rest api")
})

test("update book js to ts", () => {
  //data
  let user: UserWithLaptop & UserWithBooks = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"]
  }

  // action
  const userCopy = updateUserBook(user, "js", "ts")

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe("ts")
  expect(user.books[2]).toBe("js")
  expect(user.books.length).toBe(4)
})

test("remove js book", () => {
  //data
  let user: UserWithLaptop & UserWithBooks = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    books: ["css", "html", "js", "react"]
  }

  // action
  const userCopy = removeUserBook(user, "js")

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe("react")
  expect(userCopy.books.length).toBe(3)
  expect(user.books[2]).toBe("js")
})

test("add new company", () => {
  //data
  let user: UserWithLaptop & WithCompaniesType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    companies: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Incubator"},
    ]
  }

  // action
  const userCopy = addCompanyToUser(user, "Google")

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(userCopy.companies.length).toBe(3)
  expect(user.companies.length).toBe(2)
  expect(userCopy.companies[0].title).toBe("Epam")
  expect(userCopy.companies[1].title).toBe("Incubator")
  expect(userCopy.companies[2].title).toBe("Google")
})

test("update company title", () => {
  //data
  let user: UserWithLaptop & WithCompaniesType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    },
    companies: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Incubator"},
    ]
  }

  // action
  const userCopy = updateCompanyTitle(user, 1, "Епам")

  // expected
  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(userCopy.companies.length).toBe(2)
  expect(user.companies.length).toBe(2)
  expect(userCopy.companies[0].title).toBe("Епам")
  expect(userCopy.companies[1].title).toBe("Incubator")
})

test("update company test2", () => {
  //data
  let user: UserWithLaptop = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "ZenBook",
    }
  }

  let companies: CompaniesAssociativeArrayType = {
    "Dimych": [{id: 1, title: "Epam"}, {id: 2, title: "Incubator"},
    ],
    "Artem": [{id: 1, title: "Incubator"}]
  }

  // action
  let companiesCopy: CompaniesAssociativeArrayType = updateCompanyTitle2(companies, "Dimych", 1, "Google")

  // expected
  expect(companiesCopy["Dimych"][0].title).toBe("Google")
  expect(companies["Dimych"][0].title).toBe("Epam")
})
