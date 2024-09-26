export type Transaction = {
  id: number;
  entity: string;
  date: string;
  points: number;
  operation: 'earned' | 'used' | string;
  transactionNo: string;
};

export type TransactionSection = {
  title: string;
  data: Transaction[];
};
