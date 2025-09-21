import { useState } from 'react';

const useCounter = () => {
  const [history, setHistory] = useState<number[]>([0]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [inputNumber, setInputNumber] = useState<number>(0);
  const count = history[historyIndex];
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const changeInputNumber = (newInputNumber: number) => {
    const newNumber = Number(newInputNumber);
    if (!Number.isNaN(newNumber)) {
      setInputNumber(newNumber);
    }
  };

  const setCountAndResetInput = (newCount: number) => {
    const newHistory = [...history.slice(0, historyIndex + 1), newCount];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setInputNumber(0);
  };

  const increment = () => {
    setCountAndResetInput(count + inputNumber);
  };

  const decrement = () => {
    setCountAndResetInput(count - inputNumber);
  };

  const undo = () => {
    if (canUndo) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (canRedo) {
      setHistoryIndex(historyIndex + 1);
    }
  };

  return {
    count,
    inputNumber,
    setInputNumber,
    increment,
    decrement,
    changeInputNumber,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

export default useCounter;
