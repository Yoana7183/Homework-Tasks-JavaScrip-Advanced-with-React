// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// name of the city with minimum population

const cities = [
    { name: 'Sofia', population: 1_236_000 },
    { name: 'Plovdiv', population: 343_424 },
    { name: 'Burgas', population: 202_766 },
    { name: 'Varna', population: 335_177 },
];

function findMinPopulationCityName(cities) {

    var citiesPopulation = Math.min(...cities.map(cities => cities.population))
    let cityName = cities.filter(city => city.population == citiesPopulation).map(city => city.name).toString();
    return cityName
}

// TEST:
const minCityName = findMinPopulationCityName(cities);
console.log(minCityName);

// EXPECTED OUTPUT:
// 'Burgas'
