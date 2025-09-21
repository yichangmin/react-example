import styled from '@emotion/styled';

interface FooterProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

type ACTION = 'increment' | 'decrement' | 'undo' | 'redo';

const Actions: { text: string; action: ACTION }[] = [
  {
    text: '⇦',
    action: 'undo',
  },
  {
    text: '+',
    action: 'increment',
  },
  {
    text: '-',
    action: 'decrement',
  },
  {
    text: '⇨',
    action: 'redo',
  },
];

const Footer = ({ onIncrement, onDecrement }: FooterProps) => {
  const handleAction = (action: ACTION) => {
    switch (action) {
      case 'increment':
        onIncrement();
        break;
      case 'decrement':
        onDecrement();
        break;
      case 'undo':
        break;
      case 'redo':
        break;
    }
  };
  return (
    <FooterContainer>
      {Actions.map((action) => (
        <CircleButton key={action.action} onClick={() => handleAction(action.action)}>
          <ActionText>{action.text}</ActionText>
        </CircleButton>
      ))}
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
