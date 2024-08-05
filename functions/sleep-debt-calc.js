function getSleepHours(day) {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 7;
      case "tuesday":
        return 6;
      case "wednesday":
        return 9;
      case "thursday":
        return 6;
      case "friday":
        return 4;
      case "saturday":
        return 10;
      case "sunday":
        return 7;
    }
}
  
const getActualSleepHours = () => 7 + 6 + 9 + 6 + 4 + 10 + 7;
  
const getIdealSleepHours = idealHours => idealHours * 7;
  
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  const difference = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours) {
      console.log("You have the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
      console.log(`You have more sleep than needed! You are over the ideal by ${Math.abs(difference)} hours.`);
  } else {
      console.log(`You need to get more rest! You are under the ideal by ${difference} hours.`);
  }
}
  
calculateSleepDebt();