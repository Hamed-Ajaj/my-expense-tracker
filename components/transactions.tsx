import React from "react";
import { FlatList } from "react-native";
import TransactionCard from "./ui/transaction-card";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      title: "Groceries",
      amount: 50,
      date: new Date("2025-01-01"),
      type: "expense",
    },
    {
      id: "2",
      title: "Dinner",
      amount: 30,
      date: new Date("2025-01-02"),
      type: "income",
    },
    {
      id: "3",
      title: "Transportation",
      amount: 20,
      date: new Date("2025-01-03"),
      type: "income",
    },
    {
      id: "4",
      title: "Entertainment",
      amount: 15,
      date: new Date("2025-01-04"),
      type: "expense",
    },
    {
      id: "5",
      title: "Entertainment",
      amount: 15,
      date: new Date("2025-01-04"),
      type: "expense",
    },
    {
      id: "6",
      title: "Entertainment",
      amount: 15,
      date: new Date("2025-01-04"),
      type: "expense",
    },
  ];
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionCard item={item} />}
    />
  );
};

export default Transactions;
