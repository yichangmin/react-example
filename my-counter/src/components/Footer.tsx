import styled from '@emotion/styled';

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
interface FooterProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Footer = ({ onIncrement, onDecrement, onUndo, onRedo, canUndo, canRedo }: FooterProps) => {
  const handleAction = (action: ACTION) => {
    switch (action) {
      case 'increment':
        onIncrement();
        break;
      case 'decrement':
        onDecrement();
        break;
      case 'undo':
        onUndo();
        break;
      case 'redo':
        onRedo();
        break;
    }
  };
  return (
    <FooterContainer>
      {Actions.map((action) => (
        <CircleButton
          key={action.action}
          onClick={() => handleAction(action.action)}
          disabled={
            action.action === 'undo' ? !canUndo : action.action === 'redo' ? !canRedo : false
          }
        >
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
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ActionText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
