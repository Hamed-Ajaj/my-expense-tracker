import { Transaction } from "@/types/transactions";
import React, { createContext, useState } from "react";

export const AddTransactionContext = createContext<{
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  handleAddTransactions: (transaction: Transaction) => void;
}>({
  transactions: [],
  setTransactions: () => {},
  handleAddTransactions: () => {},
});

export const AddTransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      title: "Groceries",
      amount: 50,
      date: new Date("2025-01-01"),
      type: "expense",
      note: "",
    },
    {
      id: "2",
      title: "Dinner",
      amount: 30,
      date: new Date("2025-01-02"),
      type: "income",
      note: "",
    },
    {
      id: "3",
      title: "Transportation",
      amount: 20,
      date: new Date("2025-01-03"),
      type: "income",
      note: "",
    },
  ]);
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
      value={{ transactions, setTransactions, handleAddTransactions }}
    >
      {children}
    </AddTransactionContext.Provider>
  );
};
