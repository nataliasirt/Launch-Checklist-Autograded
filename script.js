// Write your JavaScript code here!
// Task 2: Adding Validation
//adds EventListener to the document object to listen for submit events.
document.addEventListener("submit", function(event) 
     {
      //prevents the default form submission behavior
       event.preventDefault(); 
       //gets the value of the input element with the name pilotName etc
       const pilotName = document.querySelector("input[name=pilotName]").value;
       const copilotName = document.querySelector("input[name=copilotName]").value;
       const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       const cargoMass = document.querySelector("input[name=cargoMass]").value;
       const list = document.getElementById("faultyItems");
       //calls the formSubmission function, passing in the document object, the list element, and the values of the input elements.
       formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
     }
)
