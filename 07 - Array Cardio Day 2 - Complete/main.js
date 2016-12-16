// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// is at least one person over 19?
// is everyone over 19?

const oneAdult = people.some(person => {
  const currentYear = new Date().getFullYear()
  return (currentYear - person.year) > 18
})
console.log(oneAdult)

const allAdults = people.every(person => {
  const currentYear = new Date().getFullYear()
  return (currentYear - person.year) > 18
})
console.log(allAdults)

// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423)
console.log(findComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(comment => comment.id === 823423)
console.log(commentIndex)
const removedComment = [
  ...comments.splice(0, commentIndex),
  ...comments.splice(commentIndex)
]
console.log('LASTTTTTT', removedComment)
