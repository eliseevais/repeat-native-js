export const value10 = "10"

export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house: number
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptop = UserType & {
  laptop: LaptopType
}

export type UserWithBooks = UserType & {
  books: string[]
}

export type CompanyType = {
  id: number
  title: string
}

export type WithCompaniesType = {
  companies: CompanyType[]
}

export type CompaniesAssociativeArrayType = {
  [key: string]: CompanyType[]
}

export function makeHairStyle(u: UserType, power: number) {
  const userCopy = {
    ...u,
    hair: u.hair / power
  }
  return userCopy
}

export function moveUser(user: UserWithLaptop, city: string): UserWithLaptop {
  return {
    ...user,
    address: {
      ...user.address,
      city: city
    }
  }
}

export function makeUserWithLaptop(user: UserWithLaptop, model: string): UserWithLaptop {
  return {
    ...user,
    laptop: {
      ...user.laptop,
      title: model
    }
  }
}

export function moveUserToOtherHouse(user: UserWithLaptop & UserWithBooks, house: number): UserWithLaptop & UserWithBooks {
  return {
    ...user,
    address: {
      ...user.address,
      house: house
    }
  }
}

export function addNewBookToUser(user: UserWithLaptop & UserWithBooks, newBook: string): UserWithLaptop & UserWithBooks {
  return {
    ...user,
    books: [
      ...user.books,
      newBook
    ]
  }
}

export function addNewBooksToUser(user: UserWithLaptop & UserWithBooks, newBooks: string[]): UserWithLaptop & UserWithBooks {
  return {
    ...user,
    books: [
      ...user.books,
      ...newBooks
    ]
  }
}

export function updateUserBook(user: UserWithLaptop & UserWithBooks, oldBook: string, newBook: string): UserWithLaptop & UserWithBooks {
  return {
    ...user,
    books: user.books.map(book => book === oldBook ? newBook : book),
  }
}

export function removeUserBook(user: UserWithLaptop & UserWithBooks, book: string): UserWithLaptop & UserWithBooks {
  return {
    ...user,
    books: user.books.filter(b => b !== book),
  }
}

export function addCompanyToUser(user: UserWithLaptop & WithCompaniesType, companyToAdd: string): UserWithLaptop & WithCompaniesType {
  let newCompany: CompanyType = {
    id: Date.now() / 1000,
    title: companyToAdd
  }
  return {
    ...user,
    companies: [
      ...user.companies,
      newCompany
    ]
  }
}

export function updateCompanyTitle(user: UserWithLaptop & WithCompaniesType, companyId: number, newTitle: string): UserWithLaptop & WithCompaniesType {
  return {
    ...user,
    companies: user.companies.map(el => el.id === companyId ? {...el, title: newTitle} : el)
  }
}

export function updateCompanyTitle2(
  companies: CompaniesAssociativeArrayType,
  userName: string,
  companyId: number,
  newTitle: string): CompaniesAssociativeArrayType {
  let companyCopy = {...companies};
  companyCopy[userName] = companyCopy[userName].map(
    c => c.id === companyId
      ? {...c, title: newTitle}
      : c)

  return companyCopy
}
