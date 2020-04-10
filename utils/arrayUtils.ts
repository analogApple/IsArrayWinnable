export const isArrayWinnable = (numbers: number[]): boolean => {
  let isWinnable = false;

  const searchPath = (numbers: number[]) => {
    if (numbers[0] >= numbers.length) isWinnable = true;

    for (let i = numbers[0]; i > 0; i--) {
      if (isWinnable) break;
      searchPath([...numbers].splice(i));
    }
  };

  searchPath(numbers);

  return isWinnable;
};
