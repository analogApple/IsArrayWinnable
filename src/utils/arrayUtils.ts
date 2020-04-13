export const isArrayWinnable = (numbers: number[]) => {
  let isWinnable = false;

  const searchPath = (values: number[]) => {
    if (values[0] >= values.length) {
      isWinnable = true;
    }

    for (let i = values[0]; i > 0; i--) {
      if (isWinnable) {
        break;
      }
      searchPath([...values].splice(i));
    }
  };

  searchPath(numbers);

  return isWinnable;
};

export const getRandomArrayOfIntegers = () => {
  let numbers = [getRandomInt(1, 4)];
  for (let i = 0; i < getRandomInt(10, 50); i++) {
    numbers.push(getRandomIntForGameArray());
  }
  return numbers;
};

const getRandomInt = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + min);

const getRandomIntForGameArray = () =>
  Math.random() > 0.3 ? getRandomInt(1, 4) : 0;
