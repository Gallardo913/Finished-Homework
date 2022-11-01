// Using the map method, capitalize each minion's name EXCEPT kevin's.

const capitalizedMinions = ['bob', 'stuart', 'jerry', 'tim', 'carl', 'phil', 'dave', 'mark'];

const newMinions = capitalizedMinions.map(minion => minion.charAt(0).toUpperCase() + minion.substr(1).toLowerCase());

console.log(newMinions);

//Use filter to filter out minions that are not capitalized 
//and save the correctly capitalized minions to an array called actuallyCapitalizedMinions
  

let actuallyCapitalizedMinions = newMinions.filter((element) => {
    return element[0].toUpperCase() === element[0]
  })

  console.log(actuallyCapitalizedMinions)

// Use everyagain, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

const isCapitalized = capitalizedMinions.every((element, index) => {
        return element[0];

})

console.log(isCapitalized)