import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Dimensions} from 'react-native';
import styled from 'styled-components/native';
declare var global: {HermesInternal: null | {}};

type TKey = '+' | '-' | number;

const keys: TKey[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const {height, width} = Dimensions.get('screen');

const spacing = (value: number) => 8 * value;
const buttonWidth = (width - spacing(1) * 8) / 3;
const buttonHeight = buttonWidth / 3;

const App = () => {
  const [numbers, setNumbers] = useState<TKey[]>([]);

  const handleOnKeyPress = (key: TKey) => {
    switch (key) {
      case '+':
        setNumbers((cv) => [...cv, 0]);
      case '-':
        setNumbers((cv) => [...cv].splice(-1, 1));
        break;

      default:
        setNumbers;
        break;
    }
  };

  return (
    <Background>
      <StatusBar barStyle="dark-content" />
      <ContentContainer>
        <ArrayContainer></ArrayContainer>

        <KeyboardContainer>
          {keys.map((key) => (
            <KeyContainer key={key} onPress={() => handleOnKeyPress(key)}>
              <KeyLabel>{key}</KeyLabel>
            </KeyContainer>
          ))}
          <BackKeyContainer><KeyLabel><</KeyLabel></BackKeyContainer>
        </KeyboardContainer>
      </ContentContainer>
    </Background>
  );
};

export default App;

const KeyBase = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #000;
  border-radius: ${buttonHeight}px;
  height: ${buttonHeight}px;
  align-items: center;
  justify-content: center;
`;

const KeyboardContainer = styled.View`
  width: ${width}px;
  padding: ${spacing(2)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const KeyContainer = styled(KeyBase)`
  width: ${buttonWidth}px;
  margin: ${spacing(0.5)}px;
`;

const KeyLabel = styled.Text``;

const ArrayContainer = styled.ScrollView`
  flex: 1;
  border-width: 1px;
  border-color: black;
`;

const Background = styled.View`
  width: ${width}px;
  height: ${height}px;
`;

const ContentContainer = styled.SafeAreaView`
  flex: 1;
`;

const BackKeyContainer = styled(KeyBase)`
  margin: ${spacing(0.5)}px ${spacing(2)}px;
  width: ${width - spacing(4)}px;
`;
