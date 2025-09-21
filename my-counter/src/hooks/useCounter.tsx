import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [inputNumber, setInputNumber] = useState<number>(0);

  const changeInputNumber = (newInputNumber: number) => {
    const newNumber = Number(newInputNumber);
    if (!Number.isNaN(newNumber)) {
      setInputNumber(newNumber);
    }
  };

  const setCountAndResetInput = (newCount: number) => {
    setCount(newCount);
    setInputNumber(0);
  };

  const increment = () => {
    setCountAndResetInput(count + inputNumber);
  };

  const decrement = () => {
    setCountAndResetInput(count - inputNumber);
  };

  return { count, inputNumber, setCount, setInputNumber, increment, decrement, changeInputNumber };
};

export default useCounter;
