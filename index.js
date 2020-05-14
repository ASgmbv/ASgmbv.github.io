"use strict";

const fs = require("fs");
let countries = require("./countries.json");
let cases = require("./cases.json");

let results = [];

let countriesObjects = countries.objects.countries.geometries.map((country) => {
   let countryCases = cases.find(
      (el) => el.country === country.properties.name
   );

   console.log(JSON.stringify(countryCases));

   if (countryCases) {
      country.properties.cases = countryCases.cases;
   } else {
      country.properties.cases = -1;
   }

   results.push(country);
});

// fs.writeFileSync("./results.json", JSON.stringify(results));
