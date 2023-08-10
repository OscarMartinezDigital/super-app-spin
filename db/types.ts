export interface Transaction {
  entity: string;
  date: string;
  points: number;
  operation: string;
  transactionNo: string;
  id: number;
  expiryDate?: string;
  giftCode?: string;
  spended?: boolean;
}
