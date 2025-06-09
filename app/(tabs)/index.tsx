import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HomeTopHeader from "@/components/top-header";
import { Link } from "expo-router";
import RecenetTransactions from "@/components/recent-transactions";
import FloatingAddButton from "@/components/ui/floating-add-button";
import AddTransactionDialog from "@/components/add-transaction-dialog";

const Home = () => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  return (
    <View className="flex-1 relative  gap-16 bg-white flex-col">
      {/* top header container */}
      <HomeTopHeader />

      {/* Recent Transaction  */}
      <View className="flex px-5 py-4 flex-col gap-5">
        {/* section title */}
        <View className="flex  flex-row justify-between items-center">
          <Text className="text-[18px] font-semibold">Recent Transactions</Text>

          <Link href="/transactions">
            <Text className="text-[14px] text-[#666666]">See all</Text>
          </Link>
        </View>

        {/* Transactions */}
        <View style={{ height: 300 }}>
          <RecenetTransactions />
        </View>
      </View>

      {/* Floating add Button */}
      <FloatingAddButton
        showAddTransaction={showAddTransaction}
        setShowAddTransaction={setShowAddTransaction}
      />
      {showAddTransaction && (
        <AddTransactionDialog
          showAddTransaction={showAddTransaction}
          setShowAddTransaction={setShowAddTransaction}
        />
      )}
    </View>
  );
};

export default Home;
