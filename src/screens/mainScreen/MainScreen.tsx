import React, {useState} from 'react';
import styled from 'styled-components/native';
import AppKeyboard from './components/AppKeyboard';
import NumbersDisplay from './components/NumbersDisplay';
import IsWinnableHeader from './components/IsWinnableHeader';

const MainScreen: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 5, 0, 9, 5]);

  return (
    <Background>
      <IsWinnableHeader numbers={numbers} />
      <NumbersDisplay numbers={numbers} />
      <AppKeyboard setNumbers={setNumbers} />
    </Background>
  );
};

export default MainScreen;

const Background = styled.View`
  width: 100%;
  height: 100%;
`;
