function coffee(str) {
  
  const stringArr = str.split(' ')

  const coffeeCaps = stringArr.map((item) => item.toLowerCase().includes('coffee') ? item.toUpperCase() : item)
  
  return coffeeCaps.join(' ')
}

console.log(coffee('Hey kids, wanna buy some coffee? What is coffee? Coffee is the next sliced bread!'))

// parameters: str    // a string
// return: strCoffeeCaps    // same string but all instances of coffee are in all caps
// e.g. coffee('Hey kids, wanna buy some coffee? What is coffee? Coffee is the next sliced bread!')

// declare a variable called workingStr and assign it to str.toLowerCase()
// do while loop
  // while workingStr includes 'coffee' 
  // use the splice method on workingStr at indexOf 'coffee' and replace it with 'COFFEE'
// end loop
// declare a variable called strCoffeeCaps and assign it to workingStr
// return strCoffeeCaps