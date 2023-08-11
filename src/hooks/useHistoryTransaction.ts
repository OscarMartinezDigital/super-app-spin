import {useContext} from 'react';
import {TransactionContext} from '../contexts/TransactionContext';
import {Transaction} from '../../db/types'; // Asegúrate de la ruta correcta

const getFormattedDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const groupByDate = (transactions: Transaction[]) => {
  const grouped: Record<string, Transaction[]> = {};

  transactions.forEach(transaction => {
    const date = new Date(transaction.date);
    const formattedDate = getFormattedDate(date);
    if (!grouped[formattedDate]) {
      grouped[formattedDate] = [];
    }
    grouped[formattedDate].push(transaction);
  });

  return grouped;
};

const useHistoryTransaction = () => {
  const {transactions} = useContext(TransactionContext);

  if (!transactions) {
    throw new Error('TransactionContext not available');
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const all: Transaction[] = transactions;
  const earned: Transaction[] = transactions.filter(
    (transaction: Transaction) => transaction.operation === 'earned',
  );
  const used: Transaction[] = transactions.filter(
    (transaction: Transaction) => transaction.spended === true,
  );

  const groupedByDate = groupByDate(transactions);
  const groupedByDateArray = Object.entries(groupedByDate).map(
    ([title, data]) => ({title, data}),
  );

  const filteredTransactions = [
    {
      title: 'Hoy',
      data:
        groupedByDateArray.find(item => item.title === getFormattedDate(today))
          ?.data || [],
    },
    {
      title: 'Ayer',
      data:
        groupedByDateArray.find(
          item => item.title === getFormattedDate(yesterday),
        )?.data || [],
    },
    {
      title: 'Semana anterior',
      data:
        groupedByDateArray.find(item => item.title === 'Semana anterior')
          ?.data || [],
    },
    ...groupedByDateArray.filter(
      item => !['Hoy', 'Ayer', 'Semana anterior'].includes(item.title),
    ),
  ];

  const earnedTransactions = [
    {
      title: 'Hoy',
      data: earned.filter(
        (transaction: Transaction) =>
          getFormattedDate(new Date(transaction.date)) ===
          getFormattedDate(today),
      ),
    },
    ...groupedByDateArray.filter(
      item =>
        earned.some(
          (transaction: Transaction) =>
            getFormattedDate(new Date(transaction.date)) === item.title,
        ) && !['Hoy'].includes(item.title),
    ),
  ];

  const usedTransactions = [
    {
      title: 'Hoy',
      data: used.filter(
        (transaction: Transaction) =>
          getFormattedDate(new Date(transaction.date)) ===
          getFormattedDate(today),
      ),
    },
    ...groupedByDateArray.filter(
      item =>
        used.some(
          (transaction: Transaction) =>
            getFormattedDate(new Date(transaction.date)) === item.title,
        ) && !['Hoy'].includes(item.title),
    ),
  ];

  return {
    all: filteredTransactions,
    earned: earnedTransactions,
    used: usedTransactions,
  };
};

export default useHistoryTransaction;
