export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  user_id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  created_at: string;
}

export interface TransactionStats {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
}
