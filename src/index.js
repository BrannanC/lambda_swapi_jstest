/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * MVP Challenge 🤓
 *
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
 */
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name;
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 *
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length;
}

/**
 * ### Challenge `getFirstStarshipName`
 * MVP Challenge 🤓
 *
 * @instructions
 * Return first starship's name from `starships` property.
 * If length is 0. Return 'none'
 */
function getFirstStarshipName(character) {
  // TODO: Add your code here.
  return (character.starships.length && character.starships[0].name) || "none";
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 *
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  const { name, height, mass, films } = character;
  const summary = `${name}, ${height}cm, ${mass}kg. Featured in ${
    films.length
  } films.`;
  return summary;
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 *
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
 */
function getVehiclesCostInCreditsSumTotal(character) {
  return character.vehicles.reduce((acc, cur) => acc + cur.cost_in_credits, 0);
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 *
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
 */
function getStarshipPassengerAndCrewSumTotal(character) {
  // TODO: Add your code here.
  return character.starships.reduce(
    (acc, cur) => acc + cur.crew + cur.passengers,
    0
  );
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 *
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
 */
function getNthFilm(character, filmNumber) {
  if (filmNumber <= 3 && filmNumber > 0) return character.films[filmNumber - 1];
  throw new Error(`There are only 3 Star Wars movies. Flan fiction excluded.`);
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 *
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
 */

function getVehicleTotalCargo(character) {
  return character.vehicles.reduce(
    (acc, cur) =>
      cur.cargo_capacity ? acc + Number(cur.cargo_capacity) : acc + 0,
    0
  );
}

function getStarShipTotalCargo(character) {
  return character.starships.reduce(
    (acc, cur) =>
      cur.cargo_capacity ? acc + Number(cur.cargo_capacity) : acc + 0,
    0
  );
}
// const vehicleTotal = getVehicleTotalCargo(character);
// const starshipTotal = getStarShipTotalCargo(character);
function getCargoCapacityTotal(character) {
  return [...character.starships, ...character.vehicles].reduce(
    (acc, cur) =>
      cur.cargo_capacity ? acc + Number(cur.cargo_capacity) : acc + 0,
    0
  );
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 *
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
 */
function getFastestStarshipName(character) {
  if (!character.starships.length) return "none";
  const id = character.starships.reduce((acc, cur, i, arr) => {
    return Number(cur.max_atmosphering_speed) >=
      Number(arr[acc].max_atmosphering_speed)
      ? i
      : acc;
  }, 0);
  return character.starships[id].name;
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 *
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
 */
function getLargestCargoStarshipModelName(character) {
  if (!character.starships.length) return "none";
  const id = character.starships.reduce((acc, cur, i, arr) => {
    return Number(cur.cargo_capacity) >= Number(arr[acc].cargo_capacity)
      ? i
      : acc;
  }, 0);
  return character.starships[id].model;
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
 */
function getSlowestVehicleOrStarshipName(character) {
  if (!character.vehicles.length && !character.starships.length) return "none";
  const all = [...character.starships, ...character.vehicles];
  const id = all.reduce((acc, cur, i, arr) => {
    return Number(cur.max_atmosphering_speed) <=
      Number(arr[acc].max_atmosphering_speed)
      ? i
      : acc;
  }, 0);
  return all[id].name;
}
// let vehicleID;
// let starshipID;
// vehicleID =
//   !!character.vehicles.length &&
//   character.vehicles.reduce((acc, cur, i, arr) => {
//     return Number(cur.max_atmosphering_speed) <=
//       Number(arr[acc].max_atmosphering_speed)
//       ? i
//       : acc;
//   }, 0);
// const vehicleSpeed =
//   character.vehicles[vehicleID] &&
//   character.vehicles[vehicleID].max_atmosphering_speed;
// starshipID =
//   !!character.starships.length &&
//   Number(
//     character.starships.reduce((acc, cur, i, arr) => {
//       return Number(cur.max_atmosphering_speed) <=
//         Number(arr[acc].max_atmosphering_speed)
//         ? i
//         : acc;
//     }, 0)
//   );
// const starShipSpeed =
//   character.starships[starshipID] &&
//   Number(character.starships[starshipID].max_atmosphering_speed);
// return starShipSpeed < vehicleSpeed
//   ? character.starships[starshipID].name
//   : character.vehicles[vehicleID] && character.vehicles[vehicleID].name;

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (getName) {
    module.exports.getName = getName;
  }
  if (getFilmCount) {
    module.exports.getFilmCount = getFilmCount;
  }
  if (getFirstStarshipName) {
    module.exports.getFirstStarshipName = getFirstStarshipName;
  }
  if (getSummary) {
    module.exports.getSummary = getSummary;
  }
  if (getVehiclesCostInCreditsSumTotal) {
    module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal;
  }
  if (getStarshipPassengerAndCrewSumTotal) {
    module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal;
  }
  if (getNthFilm) {
    module.exports.getNthFilm = getNthFilm;
  }
  if (getCargoCapacityTotal) {
    module.exports.getCargoCapacityTotal = getCargoCapacityTotal;
  }
  if (getFastestStarshipName) {
    module.exports.getFastestStarshipName = getFastestStarshipName;
  }
  if (getLargestCargoStarshipModelName) {
    module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName;
  }
  if (getSlowestVehicleOrStarshipName) {
    module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName;
  }
}
