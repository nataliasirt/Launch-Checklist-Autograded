// Write your JavaScript code here!

// TASK 2: ADD VALIDATION
//adds an event listener to the document to listen for the submit event.
document.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const pilotName = document.querySelector("input[name=pilotName]").value;
  const copilotName = document.querySelector("input[name=copilotName]").value;
  const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
  const cargoMass = document.querySelector("input[name=cargoMass]").value;
  const list = document.getElementById("faultyItems");
  
  formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
});

// PART 3: FETCH PLANETARY DATA
// adds an event listener to the window object that triggers when the page loads.
window.addEventListener("load", function(event) {  
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  
  listedPlanetsResponse.then(function(result) {
      listedPlanets = result;
      console.log(listedPlanets);
  // calls the appropriate helper functions to pick a planet from the list of planets
  }).then(function() {
      //picks a planet from the JSON
      let randomPlanet = pickPlanet(listedPlanets);
      // adds info from the JSON to the chosen destination and displays its information.
      addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);          
  });
});


