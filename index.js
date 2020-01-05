// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let blocks;
  if (location >= 43) {
     blocks = location - 43 + 1;
      return blocks;
  } else {
    blocks = 43 - location -1;
    return blocks
    }
  }

  function distanceFromHqInFeet(location) {
      let feet = distanceFromHqInBlocks(location) * 264
      return feet
  }

  function distanceTravelledInFeet(start, finish) {
    let distance = (start - finish) * 264;
    return Math.abs(distance);
  }

  function calculatesFarePrice(start, finish) {
    let fare;
    let feet = distanceTravelledInFeet(start, finish)
    if (feet < 400) {
       fare = 0;
       return fare
    } else if (feet >= 400 && feet <= 2000) {
          fare = (feet - 400) * .02
          return fare;
    } else if (feet >= 2000 && feet <= 2500) {
        fare = 25;
        return fare;
    } else {
        return "cannot travel that far";
    }
  }
