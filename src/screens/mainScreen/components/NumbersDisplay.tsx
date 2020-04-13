import React, {useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {spacing} from '../../../utils/themeUtils';
import {ScrollView} from 'react-native';

interface IProps {
  numbers: number[];
}

const NumbersDisplay: React.FC<IProps> = ({numbers}) => {
  const ref = useRef<ScrollView>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollToEnd();
    }
  }, [numbers]);

  return (
    <ScrollContainer ref={ref}>
      <ArrayContainer>
        {numbers.map((number, index) => {
          const isFirst = index === 0;
          const isLast = index === numbers.length - 1;
          return (
            <NumberContainer key={index}>
              <Label>
                {isFirst && '[ '}
                {number}
                {isLast ? ' ]' : ', '}
              </Label>
            </NumberContainer>
          );
        })}
      </ArrayContainer>
    </ScrollContainer>
  );
};

export default NumbersDisplay;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

const ArrayContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${spacing(2)}px;
`;

const NumberContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 48px;
`;
