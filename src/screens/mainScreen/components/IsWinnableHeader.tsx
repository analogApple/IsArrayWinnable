import React from 'react';
import styled from 'styled-components/native';
import {spacing} from '../../../utils/themeUtils';
import {isArrayWinnable} from '../../../utils/arrayUtils';

enum EArrayTypeLabel {
  IsWinnable = 'Array is winnable',
  IsNotWinnable = 'Array is not winnable',
}

interface IProps {
  numbers: number[];
}

const IsWinnableHeader: React.FC<IProps> = ({numbers}) => {
  const getHeaderLabel = () => {
    if (numbers.length) {
      return isArrayWinnable(numbers)
        ? EArrayTypeLabel.IsWinnable
        : EArrayTypeLabel.IsNotWinnable;
    }
    return 'Start typing';
  };

  return (
    <Container>
      <Label>{getHeaderLabel()}</Label>
    </Container>
  );
};

export default IsWinnableHeader;

const Container = styled.View`
  padding: ${spacing(2)}px;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 24px;
`;
