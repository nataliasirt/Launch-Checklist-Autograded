// TASK 2: ADD VALIDATION
// validateInput() takes a string and returns "Empty", "Not a Number" or "Is a Number" if needed. The data from validateInput() will flow into formSubmission(). 
function validateInput(testInput) 
{if (testInput === '') {
  return "Empty";
} else if (isNaN(testInput)) {
  return "Not a Number";
} else {
  return "Is a Number";
    }
}
 //this function takes in several parameters and updates the UI based on the input values
function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById("launchStatus") 
  let pilotStatus = document.getElementById("pilotStatus") 
  let copilotStatus = document.getElementById("copilotStatus") 
  let fuelStatus = document.getElementById("fuelStatus") 
  let cargoStatus = document.getElementById("cargoStatus")

  //checks if pilotName, copilotName, fuelLevel, cargoMass are empty strings
    if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoLevel === "") {
      alert("All fields are required!");
    }
  
  // makes sure fuelLevel and cargoLevel are numbers
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
      alert("fuelLevel and cargoMass must be numbers");
    }
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

  //checks if cargoMass and fuelLevel are within appropriate ranges
    if (cargoLevel < 10000 && fuelLevel >= 10000) 
    {
  // list.style.visibility = "hidden";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
  
  // if fuel level is 10,000 or more, list stays hidden
    if (fuelLevel >= 10000)
    {
  // list.style.visibility = "hidden";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
      fuelStatus.innerHTML = "Fuel level high enough for launch";
    } 
    else 
  // if fuelLevel is under 10,000, list becomes visible, "not ready" messages appear 
    { 
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      fuelStatus.innerHTML = "Fuel level too low for launch"; 
    }
  //check if cargo mass is <10,000
    if (cargoLevel < 10000) 
    { 
  // list.style.visibility = "hidden";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
    else 
  //if cargoMass >= 10000, then show list and make red
    { 
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
    }    
}  
//PART 3: FETCH PLANETARY DATA
// gets all of the planets from JSON
async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response)
    {
    return response.json();
    });
    return planetsReturned;
}
//picks a random planet from planets list in JSON
function pickPlanet(listedPlanets)
{
  let randomPlanet = Math.floor(Math.random() * listedPlanets.length)  
  return (listedPlanets[randomPlanet]);
}
//manipulates DOM to put html on the page 
function addDestinationInfo(document, name, diameter, star, distance, moons, image)
{
   document.getElementById("missionTarget").innerHTML =
      `
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