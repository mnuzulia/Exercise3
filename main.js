var planets = [
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate"
  },
  {
    name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical"
  },
  {
    name: "Hoth",
    rotation_period: "23",
    orbital_period: "549",
    diameter: "7200",
    climate: "frozen"
  },
  {
    name: "Dagobah",
    rotation_period: "23",
    orbital_period: "341",
    diameter: "8900",
    climate: "murky"
  },
  {
    name: "Bespin",
    rotation_period: "12",
    orbital_period: "5110",
    diameter: "118000",
    climate: "temperate"
  },
  {
    name: "Endor",
    rotation_period: "18",
    orbital_period: "402",
    diameter: "4900",
    climate: "temperate"
  },
  {
    name: "Naboo",
    rotation_period: "26",
    orbital_period: "312",
    diameter: "12120",
    climate: "temperate"
  },
  {
    name: "Coruscant",
    rotation_period: "24",
    orbital_period: "368",
    diameter: "12240",
    climate: "temperate"
  },
  {
    name: "Kamino",
    rotation_period: "27",
    orbital_period: "463",
    diameter: "19720",
    climate: "temperate"
  },
  {
    name: "Geonosis",
    rotation_period: "30",
    orbital_period: "256",
    diameter: "11370",
    climate: "temperate, arid"
  }
];

// Filter Table
function realtimeSearch() {
  var resultData = document.getElementById("result-data");
  var keyword = document.getElementById("input-search").value.toLowerCase();
  var resultPlanet =
    "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th><th>Climate</th></tr></thead>";
  for (var i = 0; i < planets.length; i++) {
    var nameSearch = planets[i].name;
    var rotationSearch = planets[i].rotation_period;
    var orbitalSearch = planets[i].orbital_period;
    var diameterSearch = planets[i].diameter;
    var climateSearch = planets[i].climate;

    if (nameSearch.toLowerCase().includes(keyword)) {
      resultPlanet +=
        "<tr><td>" +
        nameSearch +
        "</td><td>" +
        rotationSearch +
        "</td><td>" +
        orbitalSearch +
        "</td><td>" +
        diameterSearch +
        "</td><td>" +
        climateSearch +
        "</td></tr>";
    }
  }

  resultData.innerHTML = resultPlanet;
}

//Showing Data Planet
function showDataPlanet() {
  var planetData = document.getElementById("result-data");

  var tablePlanet =
    "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th><th>Climate</th></tr></thead>";

  for (var j = 0; j < planets.length; j++) {
    var namePlanet = planets[j].name;
    var rotationPlanet = planets[j].rotation_period;
    var orbitalPlanet = planets[j].orbital_period;
    var diameterPlanet = planets[j].diameter;
    var climatePlanet = planets[j].climate;

    tablePlanet +=
      "<tr><td>" +
      namePlanet +
      "</td><td>" +
      rotationPlanet +
      "</td><td>" +
      orbitalPlanet +
      "</td><td>" +
      diameterPlanet +
      "</td><td>" +
      climatePlanet +
      "</td></tr>";
  }

  planetData.innerHTML = tablePlanet;
}
