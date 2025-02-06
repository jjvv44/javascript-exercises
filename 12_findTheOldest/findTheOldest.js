const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = {}
    for (let p of people) {
        const name = p.name;
        const birth = p.yearOfBirth;
        let death = p.yearOfDeath;
        if (typeof death === "undefined") {
            death = 2025
        };
        const age = death - birth;
        if ( age > oldestAge) {
            oldestAge = age;
            oldestPerson = p;
        }

        console.log(`name: ${name} 
            age: ${age}
            oldestname: ${oldestPerson.name} 
            oldestage: ${oldestAge}`)

    }

    console.log(oldestPerson);
    return oldestPerson;
};


    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
