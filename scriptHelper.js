// TASK 2: ADD VALIDATION
// validateInput() takes in a string as a parameter and returns "Empty", "Not a Number" or "Is a Number" if needed.
function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
  }
  
  // This function takes in several parameters and updates the UI based on the input values
  function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let isReadyForLaunch = true;
  
    //checks if pilotName, copilotName, fuelLevel, cargoMass are empty strings
    if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
        alert("All fields are required!");
        return;
    }
  
   // makes sure fuelLevel and cargoLevel are numbers
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Fuel level and cargo mass must be numbers");
        return;
    }
  
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  // Check fuel level
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        isReadyForLaunch = false;  
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
  // Check cargo mass
    if (cargoMass >= 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        isReadyForLaunch = false;  
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
       
    }
  
    if (isReadyForLaunch) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
       // list.style.visibility = "hidden";
    } else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible";  // Only this once here
    }
}
  
  // PART 3: FETCH PLANETARY DATA
  
  // gets all of the planets from JSON
  async function myFetch() {
    let planetsReturned;
    // fetches data from an API and returns the JSON response.
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });
   
    return planetsReturned;
  }
  //picks a random planet from planets list in JSON
  function pickPlanet(listedPlanets) {
    let randomPlanet = Math.floor(Math.random() * listedPlanets.length);
    return listedPlanets[randomPlanet];
  }
  
  //manipulates DOM to put html on the page
  function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${image}">
    `;
  }
  
  module.exports.addDestinationInfo = addDestinationInfo;
  module.exports.validateInput = validateInput;
  module.exports.formSubmission = formSubmission;
  module.exports.pickPlanet = pickPlanet;
  module.exports.myFetch = myFetch;
  
  