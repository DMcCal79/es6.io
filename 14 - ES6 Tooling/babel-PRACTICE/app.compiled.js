//A preset is a collection of plugins.
var year = 2019;
var centralDivision = ['Indians', 'White Sox', 'Twins', 'Royals', 'Tigers'];
var teams = centralDivision.map(function (team) {
  return "The ".concat(team);
});
var cars = ['Corvette', 'Camaro', 'NSX'];
var tools = ['saw', 'hammer', 'wrench'];
var garage = [].concat(cars, tools);
var stuff = garage.map(function (item) {
  return console.log("I have one ".concat(item, "."));
});
