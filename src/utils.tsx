function getRandomItem(array: Array<any>) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

export {getRandomItem};
