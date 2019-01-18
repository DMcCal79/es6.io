//A preset is a collection of plugins.

const year = 2019;
const centralDivision = ['Indians', 'White Sox', 'Twins', 'Royals', 'Tigers'];

const teams = centralDivision.map(team => `The ${team}`);

const cars = ['Corvette', 'Camaro', 'NSX'];
const tools = ['saw', 'hammer', 'wrench'];
const garage = [...cars, ...tools];

const stuff = garage.map(item => console.log(`I have one ${item}.`));
