import styled from '@emotion/styled';

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <Title>This is React Counter</Title>
      </HeaderContainer>
      <CounterContainer>
        <NumberText>99</NumberText>
        <StyledInput />
      </CounterContainer>
      <FooterContainer>
        <CircleButton>
          <ActionText>⇦</ActionText>
        </CircleButton>
        <CircleButton>
          <ActionText>+</ActionText>
        </CircleButton>
        <CircleButton>
          <ActionText>-</ActionText>
        </CircleButton>
        <CircleButton>
          <ActionText>⇨</ActionText>
        </CircleButton>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: #e2dddd;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const NumberText = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #02621d;
`;

const StyledInput = styled.input`
  width: 100px;
  height: 50px;
  border: 1px solid #02621d;
  border-radius: 12px;
  text-align: center;
  font-size: 32px;
`;

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
