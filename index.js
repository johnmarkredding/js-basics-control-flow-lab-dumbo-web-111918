// Write your code in this file!
function scuberGreetingForFeet (ride) {
  let result;
  if (ride <= 400){
    result = "This one is on me!";
  } else if (ride > 2000) {
    result = "I will gladly take your thirty bucks."
  } else if (ride > 2500){
    result = "No can do."
  }
  
  return result
}