let schedule = {};

function isEmptyObj(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  console.log(isEmptyObj(schedule));