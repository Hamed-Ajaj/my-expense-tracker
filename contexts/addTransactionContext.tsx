import { Transaction } from "@/types/transactions";
import React, { createContext, useState } from "react";

export const AddTransactionContext = createContext<{
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  handleAddTransactions: (transaction: Transaction) => void;
  totalBalance: number;
  income: Transaction[];
  expenses: Transaction[];
}>({
  transactions: [],
  setTransactions: () => {},
  handleAddTransactions: () => {},
  totalBalance: 0,
  income: [],
  expenses: [],
});

export const AddTransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const totalBalance = transactions?.reduce((acc, current) => {
    const value = parseFloat(current.amount);
    return current.type === "expense" ? acc - value : acc + value;
  }, 0);

  const income = transactions.filter((trans) => trans.type === "income");
  const expenses = transactions.filter((trans) => trans.type === "expense");

  console.log(income);
  const handleAddTransactions = (transaction) => {
    setTransactions([
      ...transactions,
      {
        id: (transactions.length + 1).toString(),
        title: transaction.title,
        amount: transaction.amount,
        date: new Date("2025-01-03"),
        type: transaction.type,
        note: transaction?.note || "",
      },
    ]);
  };
  return (
    <AddTransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        handleAddTransactions,
        totalBalance,
        income,
        expenses,
      }}
    >
      {children}
    </AddTransactionContext.Provider>
  );
};
