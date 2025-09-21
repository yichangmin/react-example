import styled from '@emotion/styled';
import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputNumber, setInputNumber] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number(e.target.value);
    if (!Number.isNaN(newNumber)) {
      setInputNumber(newNumber);
    }
  };

  const setCountAndResetInput = (newCount: number) => {
    setCount(newCount);
    setInputNumber(0);
  };

  const handleIncrement = () => {
    setCountAndResetInput(count + inputNumber);
  };

  const handleDecrement = () => {
    setCountAndResetInput(count - inputNumber);
  };

  return (
    <AppContainer>
      <Header />
      <Counter count={count} inputNumber={inputNumber} onInputChange={handleInputChange} />
      <Footer onIncrement={handleIncrement} onDecrement={handleDecrement} />
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
