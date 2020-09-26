export const randomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const randomIndexFromMaxMin = (max, min, number, indexGet) => {
  if (number > max - min + 1) {
    return;
  }
  var array = [];
  if (indexGet) array.push(indexGet);
  for (var i = 0; i < number; i++) {
    var index1 = randomUnique(max - min, array, min);
    array.push(index1);
  }

  return array;
};
export const randomUnique = (scope, arr: Array<number>, min) => {
  do {
    var value = Math.floor(Math.random() * scope + min);
  } while (arr.find((o) => o == value));
  return value;
};

export const GetIndexArrayRandom = (index, arr) => {
  var min = index - 5;
  var max = index + 5;
  while (max > arr.length - 1 || min < 0) {
    if (max > arr.length - 1) {
      min--;
      max--;
    }
    if (min < 0) {
      max++;
      min++;
    }
  }
  return { max, min };
};
export const removeSpecialChar = (str) => {
  return str.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "");
};
