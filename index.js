// Write your code in this file!
function scuberGreetingForFeet (ride) {
  let result;
  if (ride <= 400){
    result = "This one is on me!";
  } else if ((ride > 2000) && (ride <= 2500)) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }
  return result
}
function ternaryCheckCity (city) {
  let result;
  city === 'NYC' ? result = "Ok, sounds good." : result = "No go.";
  return result
}

function switchOnCharmFromTip(tip) {
  let result;
  switch tip {
    case 'Generous': 
      result = "Thank you so much.";
      break;
    case : 'Not Generous'
      result = "Thank you.";
      break;
    default: 
      result = "Bye.";
  }
}


