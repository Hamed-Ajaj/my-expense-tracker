import { FlatList } from "react-native";
import TransactionCard from "./ui/transaction-card";
import { useContext } from "react";
import { AddTransactionContext } from "@/contexts/addTransactionContext";
const Transactions = () => {
  const { transactions } = useContext(AddTransactionContext);
  const recentTransactions = transactions
    ?.sort((a, b) => b.id - a.id)
    ?.slice(-10);
  return (
    <FlatList
      data={recentTransactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionCard item={item} />}
    />
  );
};

export default Transactions;
