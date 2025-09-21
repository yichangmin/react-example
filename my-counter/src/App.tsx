import styled from '@emotion/styled';
import useCounter from './hooks/useCounter';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const {
    count,
    inputNumber,
    increment,
    decrement,
    changeInputNumber,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useCounter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number(e.target.value);
    changeInputNumber(newNumber);
  };

  return (
    <AppContainer>
      <Header />
      <Counter count={count} inputNumber={inputNumber} onInputChange={handleInputChange} />
      <Footer
        onIncrement={increment}
        onDecrement={decrement}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
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
