import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// interface TransactionInput {
//   title:string;
//   value: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(r => setTransactions(r.data.transactions));
  }, [])

  async function createTransaction(transactionInput: TransactionInput){
  
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});
    const { transaction } = response.data;
    
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}