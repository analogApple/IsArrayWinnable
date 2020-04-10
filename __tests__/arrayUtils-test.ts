import {isArrayWinnable} from '../utils/arrayUtils';

const winnableArray = [1, 2, 0, 3, 0, 2, 0];
const notWinnableArray = [1, 2, 0, 1, 0, 2, 0];

test('passes [1, 2, 0, 3, 0, 2, 0] to return true', () => {
  expect(isArrayWinnable(winnableArray)).toBe(true);
});

test('passes [1, 2, 0, 1, 0, 2, 0] to return false', () => {
  expect(isArrayWinnable(notWinnableArray)).toBe(false);
});
