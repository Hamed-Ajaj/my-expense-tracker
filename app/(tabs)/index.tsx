import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeTopHeader from "@/components/top-header";
import { Link } from "expo-router";
import Transactions from "@/components/transactions";

const Home = () => {
  return (
    <View className="flex-1  gap-16 bg-white flex-col">
      {/* top header container */}
      <HomeTopHeader />

      {/* Recent Transaction  */}
      <View className="flex px-5 py-4 flex-col gap-4">
        {/* section title */}
        <View className="flex  flex-row justify-between items-centertemc">
          <Text className="text-[18px] font-semibold">
            Transactions history
          </Text>
          <Link href="/transactions">
            <Text className="text-[14px] text-[#666666]">See all</Text>
          </Link>
        </View>

        {/* Transactions */}
        <View style={{ height: 300 }}>
          <Transactions />
        </View>
      </View>
    </View>
  );
};

export default Home;
