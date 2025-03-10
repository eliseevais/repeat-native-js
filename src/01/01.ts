export const value01_01 = "01_01"

const sentences = "Hello, my friend"

export function splitIntoWords(sentences: string): string[] {
  console.log(sentences.split(" "))
  let newSent = sentences.replace(/[.,!?;:"'()\[\]{}\-]/g, '')
  newSent = newSent.replace(/ {1,}/g, " ")

  return newSent.toLowerCase().split(' ')
}

console.log(splitIntoWords("JS - the best  programming language"))

export function sum(a: number, b: number): number {
  return a + b
}

export function mult(a: number, b: number): number {
  return a * b
}
