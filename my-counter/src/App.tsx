import styled from '@emotion/styled';

function App() {
  return (
    <AppContainer>
      <RedText>This is a counter</RedText>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  background-color: gray;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const RedText = styled.span`
  color: blue;
  font-size: 80px;
  font-weight: bold;
`;
