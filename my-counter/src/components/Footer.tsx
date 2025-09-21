import styled from '@emotion/styled';

interface FooterProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const Footer = ({ onIncrement, onDecrement }: FooterProps) => {
  return (
    <FooterContainer>
      <CircleButton>
        <ActionText>⇦</ActionText>
      </CircleButton>
      <CircleButton onClick={onIncrement}>
        <ActionText>+</ActionText>
      </CircleButton>
      <CircleButton onClick={onDecrement}>
        <ActionText>-</ActionText>
      </CircleButton>
      <CircleButton>
        <ActionText>⇨</ActionText>
      </CircleButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const CircleButton = styled.button`
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
