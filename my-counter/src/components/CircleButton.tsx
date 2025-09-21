import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

interface CircleButtonProps {
  onClick?: () => void;
}

const CircleButton = ({ onClick, children }: PropsWithChildren<CircleButtonProps>) => {
  return (
    <CircleStyledButton onClick={onClick}>
      <ActionText>{children}</ActionText>
    </CircleStyledButton>
  );
};

export default CircleButton;

const CircleStyledButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #464cf0;
  color: white;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #6f73e4;
  }
  &:active {
    background-color: #464cf0;
  }
`;

const ActionText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
