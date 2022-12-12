let citiesOfBulgaria = [
    {
        name: 'Sofiq',
        population: '1 276 956',
        land: '492 km²'
    },

    {
        name: 'Plovdiv',
        population: '368 040',
        land: '101,98 km²'
    },
    {
        name: 'Burgas',
        population: '210 813',
        land: '	253,64 km²'
    }

]

let citiesOfTurkey = [
    {
        name: 'Istanbul',
        population: '15 462 452',
        land: '	5343 km²'
    },
    {
        name: 'Ankara',
        population: '5 747 325',
        land: '25 706 km²'
    },
    {
        name: 'Bursa',
        population: '3 139 744',
        land: '11 043 km²'
    }

]

let citiesBulgaria = new Set
for (const city of citiesOfBulgaria) {
    citiesBulgaria.add(city)

}
let citiesTurkey = new Set
for (const city of citiesOfTurkey) {
    citiesTurkey.add(city)

}

let countries = new Map
countries.set('Bulgaria', citiesBulgaria)
countries.set('Turkey', citiesTurkey)


function findCity(countryName, cityName) {

    let cities = countries.get(countryName)

    for (let city of cities) {
        if (city.name == cityName) {
            return city;
        }
    }

}

function logCity(city) {
    if (city === undefined) {
        console.log(`There is no such city`);
        return;
    }
    console.log(`City : ${city.name}, Population : ${city.population}, Land : ${city.land}`);
}

var foundedCity = findCity('Bulgaria', 'Sofiq')
logCity(foundedCity)
foundedCity = findCity('Turkey', 'Ankara')
logCity(foundedCity)