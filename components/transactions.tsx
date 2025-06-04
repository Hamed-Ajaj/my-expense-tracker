import { FlatList } from "react-native";
import TransactionCard from "./ui/transaction-card";
import { useContext } from "react";
import { AddTransactionContext } from "@/contexts/addTransactionContext";
const Transactions = () => {
  const { transactions } = useContext(AddTransactionContext);

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionCard item={item} />}
    />
  );
};

export default Transactions;
