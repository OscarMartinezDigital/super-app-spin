import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export const TransactionContext = createContext<any>(null);

export const useTransactionContext = () => {
  return useContext(TransactionContext);
};

export const TransactionProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [userPoints, setUserPoints] = useState<number>(10500);

  useEffect(() => {
    fetch('http://localhost:3000/history')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <TransactionContext.Provider
      value={{transactions, userPoints, setUserPoints}}>
      {children}
    </TransactionContext.Provider>
  );
};
