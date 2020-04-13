import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export enum ESizes {
  ScreenHeight = height,
  ScreenWidth = width,
  DefaultSpacing = 8,
}
