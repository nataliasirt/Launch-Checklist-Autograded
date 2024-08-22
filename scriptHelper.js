// Task 2: Adding Validation
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
function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
  let launchStatus = document.getElementById("launchStatus") 
  let pilotStatus = document.getElementById("pilotStatus") 
  let copilotStatus = document.getElementById("copilotStatus") 
  let fuelStatus = document.getElementById("fuelStatus") 
  let cargoStatus = document.getElementById("cargoStatus")

    //check if pilotName, copilotName, fuelLevel, cargoMass are empty strings
    if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
      alert("All fields are required!");
    }
  
    // makes sure fuelLevel and cargoMass are numbers
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
      alert("fuelLevel and cargoMass must be numbers");
    }
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

    //checks if cargoMass and fuelLevel are within appropriate ranges
    if (cargoMass < 10000 && fuelLevel >= 10000) 
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
      //  list.style.visibility = "hidden";
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
    if (cargoMass < 10000) 
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



 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;