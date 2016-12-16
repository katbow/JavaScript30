const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(inventor => {
  return inventor.year > 1499 && inventor.year < 1600
})

// 2. Give us an array of the inventory first and last names
const inventorNames = inventors.map(inventor => {
  return inventor.first + ' ' + inventor.last
})

// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => {
  return a.year > b.year ? 1 : -1
})

// 4. How many years did all the inventors live?
const totalYearsLived = inventors.reduce((total, currentInventor) => {
  return total + (currentInventor.passed - currentInventor.year)
}, 0)

// 5. Sort the inventors by years lived
const sortedYearsLived = inventors.sort((a, b) => {
  return (a.passed - a.year) > (b.passed - a.year) ? -1 : 1
})

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const catergory = document.querySelector('.mw-category')
// const links = Array.from(category.querySelectorAll('a'))
//
// const containsDe = links.map(link => {
//   return link.textContent
// }).filter(streetName => streetName.includes('de'))

// 7. Sort the people alphabetically by last name
const alphabeticalLast = people.sort((prev, curr) => {
  const [prevLast, prevFirst] = prev.split(', ')
  const [currLast, currFirst] = curr.split(', ')
  return prevLast > currLast ? 1 : -1
})

// 8. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']
const talliedData = data.reduce((obj, item) => {
  if (obj[item]) {
    obj[item]++
  } else {
    obj[item] = 1
  }
  return obj
}, {})