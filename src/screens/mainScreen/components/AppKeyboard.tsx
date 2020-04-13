import React from 'react';
import styled from 'styled-components/native';
import {ESizes} from '../../../constants/sizes';
import {spacing} from '../../../utils/themeUtils';
import {getRandomArrayOfIntegers} from '../../../utils/arrayUtils';

const buttonWidth = (ESizes.ScreenWidth - spacing(1) * 7) / 3;
const longButtonWidth = ESizes.ScreenWidth - spacing(6);
const buttonHeight = buttonWidth / 3;

const nineKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface IProps {
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

const AppKeyboard: React.FC<IProps> = ({setNumbers}) => {
  const handleOnKeyPress = (key: number) => setNumbers((cv) => [...cv, key]);

  const handleOnBackKeyPress = () =>
    setNumbers((cv) => {
      const copyOfNumbers = [...cv];
      copyOfNumbers.pop();
      return copyOfNumbers;
    });

  const handleOnGenerateRandomArrayKeyPress = () =>
    setNumbers(getRandomArrayOfIntegers());

  const handleOnResetKeyPress = () => setNumbers([]);

  return (
    <>
      <KeysContainer>
        {nineKeys.map((key) => (
          <KeyContainer key={key} onPress={() => handleOnKeyPress(key)}>
            <KeyLabel>{key}</KeyLabel>
          </KeyContainer>
        ))}
      </KeysContainer>
      <KeysContainer>
        <KeyContainer onPress={() => handleOnKeyPress(0)}>
          <KeyLabel>{'0'}</KeyLabel>
        </KeyContainer>
        <KeyContainer onPress={handleOnBackKeyPress}>
          <KeyLabel>{'<'}</KeyLabel>
        </KeyContainer>
      </KeysContainer>
      <LongKeyContainer onPress={handleOnGenerateRandomArrayKeyPress}>
        <KeyLabel>{'Generate random array'}</KeyLabel>
      </LongKeyContainer>
      <LongKeyContainer onPress={handleOnResetKeyPress}>
        <KeyLabel>{'Reset'}</KeyLabel>
      </LongKeyContainer>
    </>
  );
};

export default AppKeyboard;

const KeyBase = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: ${buttonHeight}px;
  height: ${buttonHeight}px;
  align-items: center;
  justify-content: center;
`;

const KeysContainer = styled.View`
  width: ${ESizes.ScreenWidth}px;
  padding: 0px ${spacing(2)}px;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const KeyContainer = styled(KeyBase)`
  width: ${buttonWidth}px;
  margin: ${spacing(0.5)}px;
`;

const KeyLabel = styled.Text`
  font-size: 24px;
`;

const LongKeyContainer = styled(KeyBase)`
  margin: ${spacing(0.5)}px ${spacing(3)}px;
  width: ${longButtonWidth}px;
`;
